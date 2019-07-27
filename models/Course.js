const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const CourseSchema = new Schema({
  name: String,
  description: String,
  difficulty: String,
  author: String,
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = Course = mongoose.model('course', CourseSchema);