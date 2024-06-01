
const express = require('express');

require('dotenv').config();

const app = express();


// GET /
app.get('/', (req, res) => {
    res.json({ message: 'all good in here' });
});


// GET /hello
app.get('/hello', (req, res) => {
    res.json({ message: 'hello world' });
});



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
