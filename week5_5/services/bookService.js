// services/bookService.js

const books = [
  { id: "b1", title: "The Three-Body Problem", author: "Liu Cixin", year: 2008, genre: "Science Fiction", summary: "..." },
  { id: "b2", title: "Jane Eyre", author: "Charlotte Brontë", year: 1847, genre: "Classic", summary: "..." },
  { id: "b3", title: "Pride and Prejudice", author: "Jane Austen", year: 1813, genre: "Classic", summary: "..." },
  { id: "b4", title: "The English Patient", author: "Michael Ondaatje", year: 1992, genre: "Historical Fiction", summary: "..." },
  { id: "b5", title: "Small Gods", author: "Terry Pratchett", year: 1992, genre: "Fantasy", summary: "..." }
];

async function getAllBooks() {
  return books;
}

async function getBookById(id) {
  return books.find(b => b.id === id);
}

module.exports = { getAllBooks, getBookById };