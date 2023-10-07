
// Question 6.3 
// create the logging class
class Logging {
    // the parameter of the constructor is an instance of the calculator library 
    constructor(calculatorLibrary) {
        // allow the logging instance to access methods of the calculator library instance
        this.calculatorLibrary = calculatorLibrary;
    }

    // method named logResults
    logResults() {
        // extract the ID of the calculator library instance and assign to variable ID
        const ID = this.calculatorLibrary.id;
        // extract the results from the calculator library instance and assign to variable result
        const result = this.calculatorLibrary.result;

        // write your console message to log
        console.log(`[ID: ${ID}] Result: ${result}`);
    }
}

// export the library 
module.exports = Logging;