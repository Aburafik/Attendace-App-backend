// src/models/AttendanceRecord.js
const mongoose = require('mongoose');

const attendanceRecordSchema = new mongoose.Schema({
  Intern: { type: mongoose.Schema.Types.ObjectId, ref: 'Intern' },
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
