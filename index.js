const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello, insecure world!");
});

// Example vulnerable endpoint (XSS)
app.get('/xss', (req, res) => {
    const input = req.query.input || "no input";
    res.send(`You entered: ${input}`); // ❌ no sanitization
});

app.listen(3000, () => {
    console.log("App running on http://localhost:3000");
});