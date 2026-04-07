const mongoose = require('mongoose');
const Book = require('./models/bookModel');

mongoose.connect('mongodb://127.0.0.1:27017/booksDB');

const seedBooks = [
  {
    title: "The Three-Body Problem",
    author: "Cixin Liu",
    year: 2008,
    genre: "Science Fiction",
    summary: "Earth encounters an alien civilization.",
    price: 29.99
  },
  {
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    year: 1847,
    genre: "Classic",
    summary: "An orphaned governess story.",
    price: 22
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    genre: "Classic",
    summary: "Love and society.",
    price: 22
  },
  {
    title: "The English Patient",
    author: "Michael Ondaatje",
    year: 1992,
    genre: "Historical Fiction",
    summary: "War-time memory and identity.",
    price: 25.39
  },
  {
    title: "Small Gods",
    author: "Terry Pratchett",
    year: 1992,
    genre: "Fantasy",
    summary: "A god becomes a tortoise.",
    price: 31.99
  }
];

async function seedDB() {
  await Book.deleteMany({});
  await Book.insertMany(seedBooks);
  console.log("Seeded successfully");
  mongoose.connection.close();
}

seedDB();