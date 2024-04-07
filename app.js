const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (e.g., HTML, CSS, JS)
app.use(express.static('public'));

// Handle POST requests to /register
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    // Handle registration logic here (e.g., save to database)
    console.log(`New user registered - Username: ${username}, Email: ${email}`);
    res.send('Registration successful!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
