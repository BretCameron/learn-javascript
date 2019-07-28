const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const CourseSchema = new Schema({
  name: String,
  summary: String,
  description: String,
  difficulty: String,
  tags: [String],
  author: String,
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = Course = mongoose.model('course', CourseSchema);