// controllers/bookController.js
const bookService = require('../services/bookService');

exports.getAllBooks = async (_req, res, next) => {
  try {
    const books = await bookService.getAllBooks();
    res.status(200).json({
      status: 200,
      data: books,
      message: 'Books retrieved successfully'
    });
  } catch (err) {
    next(err);
  }
};

exports.getBookById = async (req, res, next) => {
  try {
    const book = await bookService.getBookById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json({ status: 200, data: book });
  } catch (err) {
    next(err);
  }
};