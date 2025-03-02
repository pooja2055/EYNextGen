import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { connectDB } from './db.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Simple route
app.get('/', (req, res) => {
    res.send('Personal Finance Manager Backend is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
