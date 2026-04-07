// controllers/bookController.js

const bookService = require('../services/bookService');

const getAllBooks = (req, res) => {
  const items = bookService.getAllBooks();
  res.json({
    status: 200,
    data: items,
    message: 'Books retrieved using service'
  });
};

module.exports = {
  getAllBooks
};