import { MongoClient } from 'mongodb';

let cachedClient = null;
let cachedDb = null;

async function connectToDatabase() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('MONGODB_URI environment variable is not defined.');
  }

  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db('portfolio');

  cachedClient = client;
  cachedDb = db;
  return { client, db };
}

export default async function handler(req, res) {
  // Set CORS headers if needed
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

    // Validation
    if (!name || typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({ success: false, message: 'Please provide a valid name.' });
    }
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return res.status(400).json({ success: false, message: 'Please provide a valid email address.' });
    }
    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ success: false, message: 'Please provide a message.' });
    }

    const { db } = await connectToDatabase();
    const collection = db.collection('forms');

    const newSubmission = {
      name: name.trim().slice(0, 100),
      email: email.trim().toLowerCase().slice(0, 120),
      subject: (subject && typeof subject === 'string' ? subject.trim().slice(0, 150) : 'General Inquiry') || 'General Inquiry',
      message: message.trim().slice(0, 3000),
      createdAt: new Date(),
      ip: req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown',
      userAgent: req.headers['user-agent'] || 'unknown',
      status: 'unread'
    };

    const result = await collection.insertOne(newSubmission);

    return res.status(201).json({
      success: true,
      message: 'Your message has been received and saved successfully.',
      id: result.insertedId
    });
  } catch (error) {
    console.error('API Contact Error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to process contact submission. Please try again later.'
    });
  }
}
