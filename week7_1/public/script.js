const socket = io();

// Send message
function sendMessage() {
    const user = document.getElementById('username').value || "Anonymous";
    const input = document.getElementById('messageInput');
    const message = input.value;

    if (message.trim() === "") return;

    socket.emit('chat message', {
        user: user,
        text: message
    });

    input.value = '';
}

// Receive message
socket.on('chat message', (data) => {
    const li = document.createElement('li');

    // ✅ Generate time on client
    const currentTime = new Date().toLocaleTimeString();

    li.textContent = `[${currentTime}] ${data.user}: ${data.text}`;

    document.getElementById('messages').appendChild(li);
});