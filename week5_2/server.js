const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

const bookRoutes = require('./routes/book');
app.use('/api/books', bookRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to Books API');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});