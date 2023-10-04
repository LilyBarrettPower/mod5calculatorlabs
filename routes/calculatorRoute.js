// Install express using "require"
const express = require('express');
// Create the router using express.Router() method from express 
const router = express.Router();

// create the addition router
router.get('/Add', (req, res) => { //You will need to include /Add in your query string 
    let num1 = parseInt(req.query.num1); // parseInt so the numbers are parsed as number not strings 
    let num2 = parseInt(req.query.num2);

    let result = num1 + num2; // because its an addition route 

    res.status(200); // make sure the status is OK
    res.send({ res: result }); // return the result in json format 
});

router.get('/Multiply', (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);

    let result = num1 * num2;

    res.status(200);
    res.json({ res: result });
});

router.get('/Divide', (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);

    let result = num1 / num2;

    res.status(200);
    res.json({ res: result });
});

router.get('/Subtract', (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);

    let result = num1 - num2;

    res.status(200);
    res.json({ res: result });
});

// export your router to be used in the index.js file
module.exports = router;