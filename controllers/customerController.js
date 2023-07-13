const customer = require('../models/customers');
const db = require('../db/insuranceDb');

const viewAll = async (req, res) => {
    customer.find()
    .then((response) => {
        res.json(response)
    })
    .catch((error) => {
        res.json({
            message: error
        })
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