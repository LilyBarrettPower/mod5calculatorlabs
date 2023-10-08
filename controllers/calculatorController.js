// import the calculator library using require 
const CalculatorLibrary = require('../libraries/calculator');
// create a new instance of the calculator library and assign to a variable. is able to access the calculator library methods 
let calculator = new CalculatorLibrary();

// create a function for adding the numbers 
const addNumbers = (req, res) => {
    // call the add method from the library on the instance
    // the parameters are number 1 and number 2 inputted by user 
    let result = calculator.add(req.query.num1, req.query.num2);
    res.status(200); // make sure the status is OK
    res.send({ res: result }); // return the result of the calulation
}
const multiplyNumbers = (req, res) => {
    let result = calculator.multiply(req.query.num1, req.query.num2);
    res.status(200);
    res.json({ res: result });
}
const subtractNumbers = (req, res) => {
    let result = calculator.subtract(req.query.num1, req.query.num2);
    res.status(200);
    res.json({ res: result });
}
const divideNumbers = (req, res) => {
    let result = calculator.divide(req.query.num1, req.query.num2);
    res.status(200);
    res.json({ res: result });
}

// export the functions for doing calculations
module.exports = { addNumbers, multiplyNumbers, subtractNumbers, divideNumbers };