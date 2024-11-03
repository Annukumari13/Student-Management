// controllers/dashboardController.js
const Student = require('../models/Student');
const Event = require('../models/Event');
const Club = require('../models/Club');

exports.getDashboard = async (req, res) => {
    try {
        const student = await Student.findById(req.user.id);
        res.json(student);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching dashboard data' });
    }
};

exports.getLatestUpdates = async (req, res) => {
    const updates = await Event.find().sort({ date: -1 });
    res.json(updates);
};

exports.getClubs = async (req, res) => {
    const clubs = await Club.find();
    res.json(clubs);
};

exports.getSportsEvents = async (req, res) => {
    const sportsEvents = await Event.find({ category: 'sports' });
    res.json(sportsEvents);
};
