const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    name: String,
    universityID: String,
    email: String,
    photo: String
});

module.exports = mongoose.model('Student', studentSchema);