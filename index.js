const express = require('express');
const calculatorRoute = require('./routes/calculatorRoute');

const serverApp = express();
const port = 3000;

serverApp.use('/Calculator', calculatorRoute)

serverApp.listen(port, () => console.log(`Server running on port ${port}`));