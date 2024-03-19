// src/models/Intern.js
const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
  email: String,
  name: String,
  dateJoin: Date,
  department: String,  
  password: String

  // Other Intern details
});

module.exports = mongoose.model('Admins', AdminSchema);
