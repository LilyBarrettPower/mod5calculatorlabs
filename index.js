// include express using require
const express = require('express');
// include the calculator routes using require and adding to a variable
const calculatorRoutes = require('./routes/calculatorRoute');

// create the server application using express()
const serverApp = express();
// choose what port you want your server to run on
const port = 3000;

// map the route you want your calculator to use /Add, /Multiply etc will come after the /Calculator
serverApp.use('/Calculator', calculatorRoutes)

// start the server and log a message to the console to ensure the server is working correctly 
serverApp.listen(port, () => console.log(`Server running on port ${port}`));