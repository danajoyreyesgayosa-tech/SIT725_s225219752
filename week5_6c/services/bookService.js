console.log("✅ bookService loaded correctly");
const Book = require('../models/bookModel');

async function getAllBooks() {
  return await Book.find({});
}

async function getBookById(id) {
  return await Book.findById(id);
}

module.exports = {
  getAllBooks,
  getBookById
};