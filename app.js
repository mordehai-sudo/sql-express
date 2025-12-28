import express from 'express';
import './db/db.js'; // חובה לציין סיומת .js ב-ES Modules
import 'dotenv/config';
import cors from "cors"
import { UsersModel } from './models/users.js';
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3003;

// נתיב לדוגמה: קבלת כל המשתמשים
app.get('/users', async (req, res) => {
  try {
    const users = await UsersModel.find().exec();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Database error', details: err.message });
  }
});

// נתיב לדוגמה: יצירת משתמש חדש
app.post('/users', async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = new UsersModel({ name, email })
    await user.save();

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});