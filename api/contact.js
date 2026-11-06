import { MongoClient } from 'mongodb';
import nodemailer from 'nodemailer';
import { Resend } from 'resend';

let cachedClient = null;
let cachedDb = null;

async function connectToDatabase() {
  const uri = process.env.MONGO_URI || process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('MONGO_URI is missing in Vercel settings for this project. Please add MONGO_URI under Project Settings -> Environment Variables.');
  }

  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(uri, {
    serverSelectionTimeoutMS: 5000,
    connectTimeoutMS: 10000
  });

  await client.connect();
  const db = client.db('portfolio');

  cachedClient = client;
  cachedDb = db;
  return { client, db };
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed. Use POST.' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};
    const { name, email, subject, message } = body;

    // Strict validation
    if (!name || typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({ success: false, message: 'Please provide your name.' });
    }
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return res.status(400).json({ success: false, message: 'Please provide a valid email address.' });
    }
    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ success: false, message: 'Please provide a message.' });
    }

    const cleanName = name.trim().slice(0, 100);
    const cleanEmail = email.trim().toLowerCase().slice(0, 120);
    const cleanSubject = (subject && typeof subject === 'string' ? subject.trim().slice(0, 150) : 'General Inquiry') || 'General Inquiry';
    const cleanMessage = message.trim().slice(0, 3000);

    let dbSaved = false;
    let savedId = null;
    let dbErrorMessage = null;

    // 1. Try to store in MongoDB Atlas (Database: portfolio, Collection: forms)
    try {
      const { db } = await connectToDatabase();
      const collection = db.collection('forms');

      const newSubmission = {
        name: cleanName,
        email: cleanEmail,
        subject: cleanSubject,
        message: cleanMessage,
        createdAt: new Date(),
        ip: req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown',
        userAgent: req.headers['user-agent'] || 'unknown',
        status: 'unread'
      };

      const result = await collection.insertOne(newSubmission);
      dbSaved = true;
      savedId = result.insertedId;
    } catch (dbErr) {
      console.error('MongoDB Atlas Storage Error:', dbErr);
      dbErrorMessage = dbErr.message || 'Database connection error';
    }

    // 2. Try to send automated confirmation email (Resend or Gmail)
    let emailSent = false;
    const userEmailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff; color: #1e293b;">
        <div style="margin-bottom: 20px;">
          <span style="background: #2563eb; color: #ffffff; font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 9999px; text-transform: uppercase; letter-spacing: 0.05em;">Message Received</span>
        </div>
        <h2 style="color: #0f172a; margin-top: 0; font-size: 22px; font-weight: 800;">Dear ${cleanName},</h2>
        <p style="font-size: 15px; line-height: 1.6; color: #334155;">
          Thank you for reaching out to <strong>Gul Muhammad Shaikh</strong>!
        </p>
        <p style="font-size: 15px; line-height: 1.6; color: #334155;">
          I have received your message regarding <strong>"${cleanSubject}"</strong>. I will review your inquiry and get back to you promptly.
        </p>
        <div style="margin: 24px 0; padding: 16px; background-color: #f8fafc; border-left: 4px solid #2563eb; border-radius: 6px;">
          <div style="font-size: 12px; font-weight: 700; text-transform: uppercase; color: #64748b; margin-bottom: 6px;">Your Message Summary:</div>
          <div style="font-size: 14px; color: #1e293b; white-space: pre-wrap; font-style: italic;">"${cleanMessage}"</div>
        </div>
        <p style="font-size: 15px; line-height: 1.6; color: #334155; margin-bottom: 24px;">
          In the meantime, feel free to explore my latest projects or connect with me on LinkedIn and GitHub.
        </p>
        <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
        <div style="font-size: 13px; color: #64748b; line-height: 1.5;">
          <strong style="color: #0f172a; font-size: 14px;">Gul Muhammad Shaikh</strong><br />
          Full-Stack MERN Developer<br />
          Karachi, Sindh, Pakistan<br />
          <a href="https://portfolio-delta-two-x1zj6gtl3b.vercel.app/" style="color: #2563eb; text-decoration: none;">portfolio-delta-two-x1zj6gtl3b.vercel.app</a>
        </div>
      </div>
    `;

    // Strategy A: Resend API
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: 'Gul Muhammad Shaikh <onboarding@resend.dev>',
          to: cleanEmail,
          subject: 'Thank you for reaching out to Gul Muhammad Shaikh',
          html: userEmailHtml
        });
        emailSent = true;
      } catch (resendErr) {
        console.error('Resend delivery error:', resendErr);
      }
    }

    // Strategy B: Nodemailer / Gmail SMTP
    const emailUser = process.env.EMAIL_USER || process.env.GMAIL_USER || 'gulnisarshaikh@gmail.com';
    const emailPass = process.env.EMAIL_PASS || process.env.EMAIL_PASSWORD || process.env.GMAIL_APP_PASSWORD;

    if (!emailSent && emailPass) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: emailUser,
            pass: emailPass
          }
        });

        await transporter.sendMail({
          from: `"Gul Muhammad Shaikh" <${emailUser}>`,
          to: cleanEmail,
          subject: 'Thank you for reaching out to Gul Muhammad Shaikh',
          text: `Dear ${cleanName},\n\nThank you for reaching out to Gul Muhammad Shaikh.\n\nI have received your message regarding "${cleanSubject}". I will review your inquiry and get back to you promptly.\n\nBest regards,\nGul Muhammad Shaikh\nhttps://portfolio-delta-two-x1zj6gtl3b.vercel.app/`,
          html: userEmailHtml
        });

        emailSent = true;
      } catch (mailErr) {
        console.error('Gmail SMTP delivery error:', mailErr);
      }
    }

    // If database save failed and email could not be sent:
    if (!dbSaved && !emailSent) {
      return res.status(500).json({
        success: false,
        message: dbErrorMessage || 'Database connection error. Please ensure MONGO_URI is configured in Vercel settings.'
      });
    }

    return res.status(201).json({
      success: true,
      message: 'Your message has been received and saved successfully.',
      id: savedId,
      dbSaved,
      emailSent
    });
  } catch (error) {
    console.error('API Contact Error:', error);
    return res.status(500).json({
      success: false,
      message: error?.message || 'Failed to process contact submission. Please try again later.'
    });
  }
}
