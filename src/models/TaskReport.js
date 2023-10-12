// src/models/TaskReport.js
const mongoose = require('mongoose');

const taskReportSchema = new mongoose.Schema({
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  title:String,
  taskDescription: String,
  timestamp: Date,
});

module.exports = mongoose.model('TaskReport', taskReportSchema);
