const CalculatorLibrary = require('../libraries/calculator');

let calculator = new CalculatorLibrary();

const addNumbers = (req, res) => {
    let result = calculator.add(req.query.num1, req.query.num2);
    res.status(200); // make sure the status is OK
    res.send({ res: result });
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

module.exports = { addNumbers, multiplyNumbers, subtractNumbers, divideNumbers };