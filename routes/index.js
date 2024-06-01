const express = require('express');
const router = express.Router();


// GET /
router.get('/', (req, res) => {
    res.json({ message: 'all good in here' });
});


// GET /hello
router.get('/hello', (req, res) => {
    res.json({ message: 'hello world' });
});


module.exports = router;