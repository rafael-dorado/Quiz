const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 35861;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});