// src/models/AttendanceRecord.js
const mongoose = require('mongoose');

const attendanceRecordSchema = new mongoose.Schema({
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  timestamp: Date,
  type: String, // 'clockIn' or 'clockOut' or 'absent'
  
});

module.exports = mongoose.model('AttendanceRecord', attendanceRecordSchema);
