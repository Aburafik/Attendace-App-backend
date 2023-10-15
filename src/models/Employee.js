// src/models/Employee.js
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  email: String,
  staffId: String,
  name: String,
  dateJoin: Date,
  role: String,
  isAdmin: Boolean,
  
  password: String

  // Other employee details
});

module.exports = mongoose.model('Employee', employeeSchema);
