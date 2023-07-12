const express = require('express');
const router = express.Router();

const CustomerInfo = require('../models/customers');
const customerController = require('../controllers/customerController');

// GET BACK ALL THE POSTS
router.get('/', customerController.viewAll);

router.post('/', customerController.createCustomer);

module.exports = router;