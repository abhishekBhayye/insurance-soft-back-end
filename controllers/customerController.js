const customer = require('../models/customers');
const db = require('../db/insuranceDb');
const mongoose = require('mongoose');

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

const viewCustomer = (req, res) => {
    customer.findById(req.params.id)
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

const updateCustomer = (req, res) => {
    customer.updateOne(req.body)
    .then((response) => {
        res.json(response)
    })
    .catch((error) => {
        res.json({
            message: error
        })
    })
}

const deleteCustomer = (req, res) => {
    customer.deleteOne(req.body)
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
    viewAll, createCustomer, updateCustomer, deleteCustomer, viewCustomer
}