// controllers/dailyProgressController.js
const Assignment = require('../models/Assignment');
const moment = require('moment');

// Submit an assignment for the current day
exports.submitAssignment = async (req, res) => {
    const studentId = req.user.id;
    const today = moment().startOf('day').toDate();

    try {
        // Check if an assignment was already submitted today
        const existingAssignment = await Assignment.findOne({ studentId, date: today });

        if (existingAssignment) {
            return res.status(400).json({ message: 'Assignment for today has already been submitted' });
        }

        // Create a new assignment for today
        const assignment = new Assignment({ studentId, date: today, completed: true });
        await assignment.save();

        res.json({ message: 'Assignment submitted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to submit assignment', error });
    }
};

// Calculate grades and percentages based on completed assignments
exports.getGrades = async (req, res) => {
    const studentId = req.user.id;

    try {
        // Get all assignments and count completed ones
        const assignments = await Assignment.find({ studentId });
        const completedAssignments = assignments.filter(a => a.completed).length;

        const totalAssignments = assignments.length;
        const percentage = (completedAssignments / totalAssignments) * 100;

        res.json({
            completedAssignments,
            totalAssignments,
            percentage,
            grade: percentage >= 90 ? 'A' : percentage >= 75 ? 'B' : percentage >= 50 ? 'C' : 'D',
        });
    } catch (error) {
        res.status(500).json({ message: 'Failed to calculate grades', error });
    }
};
