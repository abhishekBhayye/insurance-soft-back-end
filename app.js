// const { MongoClient, ServerApiVersion } = require('mongodb');
// require('dotenv/config');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const express = require('express');
// const { default: mongoose } = require('mongoose');

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(process.env.DB_CONNECTION, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// const app = express();

// // Middlewares
// app.use(cors());
// app.use(bodyParser.json());

// // // Import Routes
// const departmentInfoRoute = require('./routes/CustomerRoute');
// app.use('/customers', departmentInfoRoute);


// app.get('/', (req,res) => {
//   res.send('We are home');
// })

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();

//     // Send a ping to confirm a successful connection
//     await client.db("insurance-db").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

// app.listen(3000);


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
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

// How to start listening to the server
app.listen(3000);