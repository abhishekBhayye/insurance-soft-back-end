const mongoose = require('mongoose');

const customers = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    date_of_reg: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    policy: {
        type: String,
        required: true
    }
});

const Customer = mongoose.model("Customer", customers);

module.exports = Customer;