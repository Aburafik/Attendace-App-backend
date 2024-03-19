// src/models/LeaveRequest.js
const mongoose = require('mongoose');

const reportsSchema = new mongoose.Schema({
  internId: { type: mongoose.Schema.Types.ObjectId, ref: 'Intern' },
          week: String,
          title: String,
          body: String,
          timeStamp:Date,
});

module.exports = mongoose.model('Reports', reportsSchema);
