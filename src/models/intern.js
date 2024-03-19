// src/models/Intern.js
const mongoose = require('mongoose');

const InternSchema = new mongoose.Schema({
  name: String,
  email: String,
  contact: String,
  school: String,
  course: String,
  gender: String,
  nationality: String,
  address: String,
  profileUrl: String,
  dateJoin: Date,
  startDate: String,
  endDate: String,
  password: String

  // Other Intern details
});

module.exports = mongoose.model('Intern', InternSchema);
