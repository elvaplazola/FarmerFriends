const express = require('express');
const router = express.Router();

router.get('/produce', (req, res) => {
    const str = [{
        "name": "apples",
        "image": "https://placekitten.com/",
        "message": "Sweet,juicy and perfect for apple pie!",
        "price": "$2.00 per lb"
    }];
    res.end(JSON.stringify(str))
});

router.post('/createPost', (req, res) => {
    res.end('NA');
});

module.exports = router;