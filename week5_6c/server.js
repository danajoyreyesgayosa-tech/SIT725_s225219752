const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const bookRoutes = require('./routes/book.routes');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// DEBUG ROUTE
app.get('/api/test', (req, res) => {
  res.json({ message: "API WORKING" });
});

// BOOK ROUTES
console.log("BOOK ROUTES LOADED");
app.use('/api/books', bookRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/booksDB')
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () =>
      console.log(`Server running http://localhost:${PORT}`)
    );
  })
  .catch(console.error);