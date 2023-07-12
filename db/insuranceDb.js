// const mongoClient = require('MongoClient');

// const connectionString = process.env.ATLAS_URI || "";

// const client = new mongoClient(connectionString);

// let conn;
// try {
//   conn = client.connect();
// } catch(e) {
//   console.error(e);
// }

// let db = conn.db("insurance_db");

// export default db;

const mongoose = require("mongoose");

const dbConnection = async () => {
  mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
    }
  );
}

const closeDbConnection = async () => {
  await mongoose.connection.close();
}

module.exports = { dbConnection, closeDbConnection } 