const express = require('express');
const app = express();

app.get('/uno', (req, res) => {
    res.send('Hello World');
});

app.post('/dos', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Server running');
});