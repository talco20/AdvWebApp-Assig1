// Tal Cohen - Shahar Miller - Advanced Web App Assignment 1
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { connectDB } from './utils/db.js';
import postRoutes from './routes/postRoutes.js';
import commentRoutes from './routes/commentRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Root route
app.get('/', (req, res) => {
    res.send("Advanced Web Applications - Assignment 1 - Shahar Miller & Tal Cohen");
});

// API Routes
app.use('/post', postRoutes);
app.use('/comments', commentRoutes);

// Connect to database and start server
connectDB();
app.listen(PORT, 'localhost', () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

export default app;

