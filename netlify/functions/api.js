const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
import serverless from 'serverless-http';
const cors = require('cors');
require('dotenv/config');

const app = express();

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

// Connect to db
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connect to DB!')
);

export const handler = serverless(api);

// How to start listening to the server
// app.listen(3000);