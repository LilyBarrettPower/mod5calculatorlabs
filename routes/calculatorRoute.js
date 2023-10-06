// Install express using "require"
const express = require('express');
// import the calculator controller and asssign to variable
const calculatorController = require('../controllers/calculatorController');
// Create the router using express.Router() method from express 
const router = express.Router();


// create the addition router
router.get('/Add', (req, res) => { //You will need to include /Add in your query string 
    calculatorController.addNumbers(req, res)
});

router.get('/Multiply', (req, res) => {
    calculatorController.multiplyNumbers(req, res)
});

router.get('/Divide', (req, res) => {
    calculatorController.divideNumbers(req, res)
});

router.get('/Subtract', (req, res) => {
    calculatorController.subtractNumbers(req, res)
});

// export your router to be used in the index.js file
module.exports = router;