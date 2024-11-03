// app.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const setupSwagger = require('./swagger');

// Route files
const authRoutes = require('./routes/authRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const dailyProgressRoutes = require('./routes/dailyProgressRoutes');
const eventRoutes = require('./routes/eventRoutes');
const clubRoutes = require('./routes/clubRoutes');

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Swagger setup
const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./swagger");
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1); // Exit on failure
    }
};
connectDB();

// Basic route for API status check
app.get('/', (req, res) => {
    res.send('College Dashboard API is running');
});

// Routes
app.use('/api/auth', authRoutes);               // Authentication routes
app.use('/api/dashboard', dashboardRoutes);      // Dashboard routes
app.use('/api/daily-progress', dailyProgressRoutes); // Daily Progress routes
app.use('/api/events', eventRoutes);             // Event routes
app.use('/api/clubs', clubRoutes);               // Club routes

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Server error', error: err.message });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
