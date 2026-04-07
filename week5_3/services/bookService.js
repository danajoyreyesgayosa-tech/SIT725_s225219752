const books = [
  { id: 1, title: 'The Three-Body Problem', author: 'Liu Cixin' },
  { id: 2, title: 'Jane Eyre', author: 'Charlotte Brontë' },
  { id: 3, title: 'Pride and Prejudice', author: 'Jane Austen' },
  { id: 4, title: 'The English Patient', author: 'Michael Ondaatje' },
  { id: 5, title: 'Small Gods', author: 'Terry Pratchett' }
];

const getAllBooks = () => books;

module.exports = { getAllBooks };