// seed.js
const mongoose = require('mongoose');
const Book = require('./models/bookModel'); // adjust path if needed

const sampleBooks = [
  { id: "b1", title: "The Three-Body Problem", author: "Liu Cixin", year: 2008, genre: "Science Fiction", summary: "..." },
  { id: "b2", title: "Jane Eyre", author: "Charlotte Brontë", year: 1847, genre: "Classic", summary: "..." },
  { id: "b3", title: "Pride and Prejudice", author: "Jane Austen", year: 1813, genre: "Classic", summary: "..." },
  { id: "b4", title: "The English Patient", author: "Michael Ondaatje", year: 1992, genre: "Historical Fiction", summary: "..." },
  { id: "b5", title: "Small Gods", author: "Terry Pratchett", year: 1992, genre: "Fantasy", summary: "..." }
];

(async () => {
  try {
    // Connect to MongoDB — no legacy options!
    await mongoose.connect('mongodb://127.0.0.1:27017/booksDB');

    // Clear existing data
    await Book.deleteMany({});

    // Insert sample books
    await Book.insertMany(sampleBooks);

    console.log('✅ Seeded 5 books into MongoDB.');
  } catch (err) {
    console.error('Seeding failed:', err.message);
  } finally {
    await mongoose.connection.close();
    process.exit(0);
  }
})();