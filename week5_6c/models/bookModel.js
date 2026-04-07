const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  year: Number,
  genre: String,
  summary: String,
  price: Number
});

module.exports = mongoose.model('Book', bookSchema);