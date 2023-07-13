const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = express.Router();

require('dotenv/config');

const app = express();

const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Import Routes
const departmentInfoRoute = require('./routes/CustomerRoute');
app.use('/customers', departmentInfoRoute);

// ROUTE
app.get('/', (req,res) => {
    res.send('We are home');
})

// start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });

// How to start listening to the server
// app.listen(3000);

module.exports = app;