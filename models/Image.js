const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true
  },
  originalName: {
    type: String
  },
  size: {
    type: Number
  },
  file: {
    type: Buffer
  },
  date: {
    type: Date,
    default: Date.now()
  }
})

module.exports = Image = mongoose.model('image', ImageSchema);