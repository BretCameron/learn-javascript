const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    required: true
  },
  file: {
    type: Buffer,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
})

module.exports = Image = mongoose.model('image', ImageSchema);