const customer = require('../models/customers');
const db = require('../db/insuranceDb');

const viewAll = async (req, res) => {
    await db.dbConnection();
    customer.find()
    .then((response) => {
        res.json(response)
    })
    .catch((error) => {
        res.json({
            message: error
        })
    })
    .finally(() => {
        db.closeDbConnection();
    })
}

const createCustomer = (req, res) => {
    customer.create(req.body)
    .then((response) => {
        res.json(response)
    })
    .catch((error) => {
        res.json({
            message: error
        })
    })
}

module.exports = {
    viewAll, createCustomer
}