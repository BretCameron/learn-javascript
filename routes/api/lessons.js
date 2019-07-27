const express = require('express');
const router = express.Router();

const Lesson = require('../../models/Lesson');
const Course = require('../../models/Course');

// Return all lessons
router.get('/', (req, res) => {
  Lesson.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// Return all courses
router.get('/courses', (req, res) => {
  Course.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// Add new lesson
router.post('/add', (req, res) => {
  let params = {
    question: req.body.question,
    courseName: req.body.courseName,
    courseId: req.body.courseId,
    initialSolution: req.body.initialSolution,
    completeSolution: req.body.completeSolution,
    hints: req.body.hints,
    testCases: req.body.testCases,
  };

  Course.findOne({ name: req.body.courseName }, (err, obj) => {

    // If a course with {name: req.body.courseName} doesn't already exist, create one
    // NOTE: this system only works while course names must be unique
    if (!obj) {
      const newCourse = new Course({
        name: req.body.courseName
      });

      newCourse.save().then(course => {
        params.courseId = course._id;
        const newLesson = new Lesson(params);
        newLesson.save().then(item => res.json(item));
      })
    }

    // If the course exists, create a new one
    else {
      if (!req.body.courseId) params.courseId = obj._id;
      const newLesson = new Lesson(params);
      newLesson.save().then(item => res.json(item));
    }
  })
});

// Delete lesson
router.delete('/delete/:id', (req, res) => {
  Lesson.findOneAndDelete(req.params.id)
    .then(() => res.json({ success: true }))
    .catch(err => res.status(404).json({ success: false }));
});

// Update lesson (non-blank fields only)
router.put('/update/:id', (req, res) => {
  let params = {
    question: req.body.question,
    initialSolution: req.body.initialSolution,
    completeSolution: req.body.completeSolution,
    hints: req.body.hints,
    testCases: req.body.testCases
  };
  for (let i in params) if (!params[i]) delete params[i];
  Lesson.findOneAndUpdate(req.params.id, params)
    .then(() => res.json({ success: true }))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;