const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
let messages = [];

app.use(bodyParser.json());
app.use(bodyParser.text());

app.get('/messages', (req, res) => {
    // Mesajları JSON formatında döndür
    res.json(messages);
});

app.post('/messages', (req, res) => {
    messages.push(req.body);
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
