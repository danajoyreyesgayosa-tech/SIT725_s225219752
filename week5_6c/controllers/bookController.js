const Book = require('../models/bookModel');

// GET all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json({ data: books });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// GET by ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.json(book);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// CREATE
exports.createBook = async (req, res) => {
  try {
    const newBook = new Book(req.body);
    const saved = await newBook.save();
    res.status(201).json(saved);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// UPDATE
exports.updateBook = async (req, res) => {
  try {
    const updated = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.json(updated);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// DELETE
exports.deleteBook = async (req, res) => {
  try {
    const deleted = await Book.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.json({ message: 'Book deleted successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
};