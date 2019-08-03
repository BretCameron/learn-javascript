const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

// Create Schema
const CourseSchema = new Schema({
  name: String,
  summary: String,
  description: String,
  difficulty: String,
  tags: [String],
  author: String,
  image_id: ObjectId,
  image_name: String,
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = Course = mongoose.model('course', CourseSchema);