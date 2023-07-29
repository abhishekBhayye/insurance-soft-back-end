const mongoose = require('mongoose');

const customers = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String
    },
    lastName: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    addressLine1: {
        type: String,
        required: true
    },
    addressLine2: {
        type: String
    },
    pinCode: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
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
    policyType: {
        type: String,
        required: true
    },
    date_of_reg: {
        type: String,
        required: true
    },
    policyName: {
        type: String,
    },
    policySchedule: {
        type: String,
        required: true
    }
});

const Customer = mongoose.model("Customer", customers);

module.exports = Customer;