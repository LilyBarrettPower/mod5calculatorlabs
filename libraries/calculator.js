// import the logging library
const Logging = require('./logging');

class CalculatorLibrary {
    constructor() {
        // Change the ID to Math.random() to generate a unique ID for each calculator use
        this.id = Math.random();
        this.logMessage = new Logging(this) // pass the calculator library as an instance of the Logging
    }
    // NO LONGER NEED THIS PRIVATE METHOD AS WE HAVE THE LOGGING LIBRARY 
            // #log = (value) => {
            //     console.log(`[Calculator :${this.id}]:${value}`)
            // }
    add(num1, num2) {
        let number1 = parseInt(num1); // parseInt so the numbers are parsed as number not strings 
        let number2 = parseInt(num2);

        let value = number1 + number2; // because its an addition route 
                // this.#log(value) - NO LONGER REQUIRED 
        this.result = value; // set the result in the calculatorLibrary instance
        this.logMessage.logResults(); // log the result with the ID. call the logResults method from the logging library 
        return value;
    }
    multiply(num1, num2) {
        let number1 = parseInt(num1);
        let number2 = parseInt(num2);

        let value = number1 * number2;
                    // this.#log(value)
        this.result = value;
        this.logMessage.logResults();
        return value;
    }
    subtract(num1, num2) {
        let number1 = parseInt(num1);
        let number2 = parseInt(num2);

        let value = number1 - number2;
                    // this.#log(value)
        this.result = value;
        this.logMessage.logResults();
        return value;
    }
    divide(num1, num2) {
        let number1 = parseInt(num1);
        let number2 = parseInt(num2);

        let value = number1 / number2;
                    // this.#log(value)
        this.result = value;
        this.logMessage.logResults();
        return value;
    }

}
module.exports = CalculatorLibrary;