const express = require('express');
const fileUpload = require('express-fileupload');
const uuid = require('uuid');

const router = express.Router();

// router.use(fileUpload());

const Image = require('../../models/Image');

// router.get('/', (req, res) => {
//   Image.find()
//     .then(item => res.json(item))
//     .catch(err => console.log(err))
// })

router.get('/img/:id', (req, res) => {
  Image.findById(req.params.id)
    .then(item => res.json(item))
    .catch(err => console.log(err))
})

router.post('/upload', (req, res) => {
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }

  let image = req.files.file;
  let id = uuid();

  const mimetypes = {
    "image/jpeg": "jpg",
    "image/webp": "webp",
    "image/png": "png",
    "image/svg+xml": "svg",
  };

  const name = id + '.' + mimetypes[image.mimetype];
  const path = './static/courseImages/' + name;

  image.mv(path, function (err) {
    if (err) console.log(err);
  });

  const newFile = new Image({
    name,
    path,
    originalName: image.name,
    size: Buffer.from(image.data).length,
    // file: Buffer.from(image.data)
  })
  newFile.save()
    .then(item => {
      res.json(item);
      console.log(item);
    })
    .catch(err => console.log(err));
})

module.exports = router;

