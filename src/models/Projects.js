// src/models/TaskReport.js
const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
          internId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Intern",
    required: true,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  githubUrl: {
    type: String,
  },

  hostedUrl: {
    type: String,
  },

  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Projects", projectSchema);
