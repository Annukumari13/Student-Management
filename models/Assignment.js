// models/Assignment.js
const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now,
        unique: true,  // Ensure only one submission per day
    },
    completed: {
        type: Boolean,
        default: false,
    },
    grade: {
        type: Number,
        default: 0,
    },
});

module.exports = mongoose.model('Assignment', assignmentSchema);
