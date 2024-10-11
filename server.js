import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import errorHandler from './middleware/errorMiddleware.js';
import goalRoutes from "./routes/goalRoutes.js"
import userRoutes from "./routes/userRoutes.js"

// Load environment variables from .env file
dotenv.config();

// Connect to the database
connectDB();

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/tasks', goalRoutes);
app.use('/api', userRoutes);

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
