const express = require('express');
const router = express.Router();

const Image = require('../../models/Image');

router.get('/', (req, res) => {
  Image.find()
    .then(item => res.json(item))
    .catch(err => console.log(err))
})

router.get('/:id', (req, res) => {
  Image.findById(req.params.id)
    .then(item => res.json(item))
    .catch(err => console.log(err))
})

router.post('/upload', (req, res) => {
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }
  const newFile = new Image({
    name: req.files.file.name,
    size: Buffer.from(req.files.file.data).length,
    file: Buffer.from(req.files.file.data)
  })
  newFile.save()
    .then(item => res.json(item))
    .catch(err => console.log(err));
})

module.exports = router;