const mongoose = require('mongoose');
const clubSchema = new mongoose.Schema({
    name: String,
    description: String,
    presidentContact: String,
    vicePresidentContact: String
});

module.exports = mongoose.model('Club', clubSchema);