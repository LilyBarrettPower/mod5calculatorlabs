const addNumbers = (req, res) => {
    let num1 = parseInt(req.query.num1); // parseInt so the numbers are parsed as number not strings 
    let num2 = parseInt(req.query.num2);

    let result = num1 + num2; // because its an addition route 

    res.status(200); // make sure the status is OK
    res.send({ res: result });
}
const multiplyNumbers = (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);

    let result = num1 * num2;

    res.status(200);
    res.json({ res: result });
}
const subtractNumbers = (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);

    let result = num1 - num2;

    res.status(200);
    res.json({ res: result });
}
const divideNumbers = (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);

    let result = num1 / num2;

    res.status(200);
    res.json({ res: result });
}

module.exports = { addNumbers, multiplyNumbers, subtractNumbers, divideNumbers };