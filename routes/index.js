const express = require('express');
const router = express.Router();


// GET /
router.get('/', (req, res) => {
    res.json({ message: 'all good in here' });
});


module.exports = router;