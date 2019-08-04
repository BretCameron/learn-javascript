const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const https = require('https');

const removeUnusedImages = require('./helpers/removeUnusedImages');

const app = express();

app.use(express.json());
app.use(fileUpload());
app.use(cors());

const db = config.get('mongoURI');

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

const cacheTime = 86400000 * 30 // the time you want
removeUnusedImages();

app.use('/courses', require('./routes/api/courses'));
app.use('/images', require('./routes/api/images'));
app.use('/course-images', express.static(path.join(__dirname, '/static/courseImages'), { maxAge: cacheTime }));
app.use('/remove-unused-images', require('./routes/api/removeUnusedImages'));
app.use('/lessons', require('./routes/api/lessons'));
app.use('/users', require('./routes/api/users'));

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port: http://localhost:${port}/`));