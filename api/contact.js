import { MongoClient } from 'mongodb';

let cachedClient = null;
let cachedDb = null;

function resolveMongoUri() {
  const raw = process.env.MONGO_URI || process.env.MONGODB_URI;
  if (!raw || typeof raw !== 'string' || !raw.trim()) {
    throw new Error('MONGO_URI is missing in Vercel settings for this project.');
  }

  // 1. Remove unicode zero-width spaces, BOM, control characters
  let clean = raw.replace(/[\u200B-\u200D\uFEFF\x00-\x1F\x7F]/g, '').trim();

  // 2. Remove surrounding quotes (both ASCII and smart quotes)
  clean = clean.replace(/^["'`“”‘’]+|["'`“”‘’]+$/g, '').trim();

  // 3. If someone pasted the full line "MONGO_URI=..."
  if (/^MONGO(?:DB)?_URI\s*=\s*/i.test(clean)) {
    clean = clean.replace(/^MONGO(?:DB)?_URI\s*=\s*/i, '').trim();
    clean = clean.replace(/^["'`“”‘’]+|["'`“”‘’]+$/g, '').trim();
  }

  // 4. If it's already a full URI starting with mongodb:// or mongodb+srv://
  const matchIndex = clean.search(/mongodb(?:\+srv)?:\/\//i);
  if (matchIndex !== -1) {
    return clean.slice(matchIndex).replace(/["'`;\s)\]}]+$/, '').trim();
  }

  // 5. If the database password was provided in MONGO_URI (e.g. "Gul03042681062")
  const dbUser = process.env.DB_USER || 'gulnisarshaikh_db_user';
  const dbHost = process.env.DB_HOST || 'cluster0.bu5a3sx.mongodb.net';
  const dbName = process.env.DB_NAME || 'portfolio';
  return `mongodb+srv://${dbUser}:${encodeURIComponent(clean)}@${dbHost}/${dbName}?retryWrites=true&w=majority`;
}

async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const uri = resolveMongoUri();

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

    // Store in MongoDB Atlas (Database: portfolio, Collection: forms)
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

    return res.status(201).json({
      success: true,
      message: 'Your message has been received and saved successfully.',
      id: result.insertedId
    });
  } catch (error) {
    console.error('API Contact Error:', error);
    return res.status(500).json({
      success: false,
      message: error?.message || 'Failed to process contact submission. Please try again later.'
    });
  }
}
