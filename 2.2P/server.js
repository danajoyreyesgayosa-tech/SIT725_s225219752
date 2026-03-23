const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Add two numbers (REQUIRED)
app.get('/add', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.send("Please provide valid numbers");
    }

    res.send(`The sum of ${a} and ${b} is ${a + b}`);
});

// Quote API (REQUIRED for your HTML to work)
app.get('/api/quote', (req, res) => {
    const quotes = [
        "The best way to predict the future is to invent it.",
        "Life is 10% what happens and 90% how you react.",
        "Stay positive, work hard, make it happen.",
        "Success is not final, failure is not fatal."
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    res.json({ quote: quotes[randomIndex] });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});