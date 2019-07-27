const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

// Create Schema
const LessonSchema = new Schema({
  question: String,
  courseName: String,
  courseId: String,
  initialSolution: String,
  completeSolution: String,
  hints: [String],
  testCases: [{ description: String, function: String }],
  date: {
    type: Date,
    default: Date.now()
  },
  order: {
    type: Number
  }
});

LessonSchema.plugin(AutoIncrement, { id: 'order_seq', inc_field: 'order' });

module.exports = Lesson = mongoose.model('lesson', LessonSchema);