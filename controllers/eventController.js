// controllers/eventController.js
const Event = require('../models/Event');

exports.getEvents = async (req, res) => {
    try {
        const events = await Event.find({}).sort({ date: 1 });  // Sort by date
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch events', error });
    }
};
