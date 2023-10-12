// src/models/LeaveRequest.js
const mongoose = require('mongoose');

const leaveRequestSchema = new mongoose.Schema({
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  startDate: Date,
  endDate: Date,
  reason: String,
  status: String, // 'Pending', 'Approved', 'Rejected', etc.
});

module.exports = mongoose.model('LeaveRequest', leaveRequestSchema);
