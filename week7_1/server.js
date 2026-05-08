const express = require('express');
const app = express();

// Create HTTP server
const http = require('http').createServer(app);

// Attach socket.io
const io = require('socket.io')(http);

// Serve static files from "public" folder
app.use(express.static('public'));

// Socket connection
io.on('connection', (socket) => {
    console.log('User connected');

    // Receive chat message
    socket.on('chat message', (data) => {
        console.log(`${data.user}: ${data.text}`);

        // Broadcast message to all clients
        io.emit('chat message', data);
    });

    // When user disconnects
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

// Start server
http.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});