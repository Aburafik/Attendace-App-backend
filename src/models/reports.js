// src/models/LeaveRequest.js
const mongoose = require('mongoose');

const reportsSchema = new mongoose.Schema({
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  weeklyReports:[{
          month: String,
          week: String,
          title: String,
          body: String,
          timeStamp:Date,
          status: String, 
  }]
});

module.exports = mongoose.model('Reports', reportsSchema);
