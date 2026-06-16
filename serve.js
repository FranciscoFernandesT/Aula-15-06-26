const express = require('express');
const app = express();

app.use(express.json());

app.get('/uno', (req, res) => {
    res.send('Hello World');
});

app.get('/dos', (req, res) => {
    res.send('Hello World');
});

app.post('/tres/:nome', (req, res) => {
    const dados = req.body;
    console.log(dados);
    res.send(req.params.nome);
    console.log(req.body)
});

app.listen(3000, () => {
    console.log('Server running');
});