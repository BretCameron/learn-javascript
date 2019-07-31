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
    .then((items) => res.json(items))
    .catch(err => console.log(err));
});

// Update course by ID
router.put('/edit/:courseId', (req, res) => {
  const params = {
    name: req.body.name,
    summary: req.body.summary,
    description: req.body.description,
    difficulty: req.body.difficulty,
    tags: req.body.tags
  };
  if (!params.tags.length > 0) delete params.tags;
  for (let i in params) if (!params[i]) delete params[i];
  Course.findByIdAndUpdate(req.params.courseId, params)
    .then(() => res.json(params))
    .catch(err => console.log(err));
});

// Delete course by id
router.delete('/delete/:courseId', (req, res) => {
  Course.findByIdAndDelete(req.params.courseId)
  .then(() => res.json({success: true}))
  .catch(err => console.log(err));
})


// Create new course
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