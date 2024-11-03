// controllers/clubController.js
const Club = require('../models/Club');

exports.getClubs = async (req, res) => {
    try {
        const clubs = await Club.find({});
        res.json(clubs);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch clubs', error });
    }
};

exports.getClubDetails = async (req, res) => {
    const { clubId } = req.params;
    try {
        const club = await Club.findById(clubId);
        if (!club) {
            return res.status(404).json({ message: 'Club not found' });
        }
        res.json(club);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch club details', error });
    }
};
