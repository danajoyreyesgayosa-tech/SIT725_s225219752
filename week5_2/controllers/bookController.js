// Sample data
const books = [
  { id: 1, title: 'The Three-Body Problem', author: 'Liu Cixin' },
  { id: 2, title: 'Jane Eyre', author: 'Charlotte Brontë' },
  { id: 3, title: 'Pride and Prejudice', author: 'Jane Austen' }
];

// Controller logic
exports.getAllBooks = (req, res) => {
  res.json({ status: 200, data: books, message: 'Books retrieved successfully' });
};

exports.getBookById = (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(b => b.id === id);
  if (!book) return res.status(404).json({ status: 404, message: 'Book not found' });
  res.json({ status: 200, data: book, message: 'Book retrieved successfully' });
};