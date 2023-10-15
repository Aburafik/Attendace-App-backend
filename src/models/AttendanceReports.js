// src/models/AttendanceRecord.js
const mongoose = require('mongoose');

const attendanceRecordSchema = new mongoose.Schema({
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  email: {
          type: String,
          required: true,
        },
      
        clockInTime: {
          type: Date,
        },
        clockOutTime: {
          type: Date,
        },
  
});

module.exports = mongoose.model('AttendanceRecord', attendanceRecordSchema);
