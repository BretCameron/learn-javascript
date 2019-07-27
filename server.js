const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');
const cors = require('cors');

const app = express();

app.use(express.json());
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

app.use('/lessons', require('./routes/api/lessons'));

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