const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = express.Router();

require('dotenv/config');

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Import Routes
const departmentInfoRoute = require('../routes/CustomerRoute');
app.use('/customers', departmentInfoRoute);

// ROUTE
app.get('/', (req,res) => {
    res.send('We are home');
})

// How to start listening to the server
// app.listen(3000);

module.exports = app;