// Tal Cohen - Shahar Miller - Advanced Web App Assignment 1
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { connectDB } from './utils/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Root route
app.get('/', (req, res) => {
    res.send("Advanced Web Applications - Assignment 1");
});

// TODO: Add routes here
// app.use('/post', postRoutes);
// app.use('/comments', commentRoutes);

// Connect to database and start server
connectDB();
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;

