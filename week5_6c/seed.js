const mongoose = require('mongoose');
const Book = require('./models/bookModel');

mongoose.connect('mongodb://127.0.0.1:27017/booksDB')
  .then(() => console.log("MongoDB connected for seeding"));

const seedBooks = [
  {
    title: "The Three-Body Problem",
    author: "Cixin Liu",
    year: 2008,
    genre: "Science Fiction",
    summary: "The Three-Body Problem is the first novel in the Remembrance of Earth's Past trilogy. The series portrays a fictional past, present, and future wherein Earth encounters an alien civilization from a nearby system of three Sun-like stars orbiting one another.",
    price: 29.99
  },
  {
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    year: 1847,
    genre: "Classic",
    summary: "An orphaned governess confronts class, morality, and love at Thornfield Hall, uncovering Mr. Rochester’s secret and forging her own independence.",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    genre: "Classic",
    summary: "Elizabeth Bennet and Mr. Darcy navigate pride, misjudgement, and social expectations in a sharp study of manners and marriage.",
    price: 22
  },
  {
    title: "The English Patient",
    author: "Michael Ondaatje",
    year: 1992,
    genre: "Historical Fiction",
    summary: "In a ruined Italian villa at the end of WWII, four strangers with intersecting pasts confront memory, identity, and loss.",
    price: 25.39
  },
  {
    title: "Small Gods",
    author: "Terry Pratchett",
    year: 1992,
    genre: "Fantasy",
    summary: "In Omnia, the god Om returns as a tortoise, and novice Brutha must confront dogma, empire, and the nature of belief. The Discworld is flat and is orbited by its sun.",
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