const express = require('express');
const app = express();
const PORT = 3000;

// Import routes
const bookRoutes = require('./routes/book');

// Mount the route
app.use('/api/book', bookRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Book Home Page!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});