import express from 'express';
import db from './db/db.js'; // חובה לציין סיומת .js ב-ES Modules
import 'dotenv/config';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3003;

// נתיב לדוגמה: קבלת כל המשתמשים
app.get('/users', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM users');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Database error', details: err.message });
  }
});

// נתיב לדוגמה: יצירת משתמש חדש
app.post('/users', async (req, res) => {
  const { name } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO users (name) VALUES (?)',
      name
    );
    res.status(201).json({ id: result.insertId, name });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});