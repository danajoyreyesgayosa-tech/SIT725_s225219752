// server.js
const express = require('express');
const path = require('path');
const bookRoutes = require('./routes/book.routes');

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API routes
app.use('/api/books', bookRoutes);

// Root
app.get('/', (_req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));

// 404 + error handlers
app.use((req, res) => res.status(404).json({ message: 'Not found' }));
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ message: 'Server error' });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));