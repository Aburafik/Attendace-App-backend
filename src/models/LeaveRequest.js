// src/models/LeaveRequest.js
const mongoose = require('mongoose');

const leaveRequestSchema = new mongoose.Schema({
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
  type: Date,
  required: true,
  }, 
  reason: {
  type: String,
  required: true
  },
  status: String, // 'Pending', 'Approved', 'Rejected', etc.
});

module.exports = mongoose.model('LeaveRequest', leaveRequestSchema);
