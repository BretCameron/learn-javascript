const express = require('express');
const router = express.Router();

const Lesson = require('../../models/Lesson');
const Course = require('../../models/Course');

// Return all courses
router.get('/', (req, res) => {
  Course.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// Get specific course by ID
router.get('/:courseId', (req, res) => {
  Course.findById(req.params.courseId)
    .then(items => res.json(items))
    .catch(err => console.log(err));
});

router.post('/create', (req, res) => {
  const newCourse = new Course({
    name: req.body.courseName,
    summary: req.body.courseSummary,
    description: req.body.courseDescription,
    difficulty: req.body.courseDifficulty,
    tags: req.body.courseTags,
  });
  newCourse.save()
    .then(item => res.json(item))
    .catch(err => res.status(404))
})

module.exports = router;