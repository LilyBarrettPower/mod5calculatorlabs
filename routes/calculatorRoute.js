const express = require('express');
const router = express.Router();

router.get('/Add', (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);

    let result = num1 + num2;

    res.status(200)
    res.send({ res: result })
});

module.exports = router;