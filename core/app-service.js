const express = require('express');
const router = express.Router();

const viewAll = (dataModel) => {
    dataModel.find()
    .then((response) => {
        return res.json(response)
    })
    .catch((error) => {
        return res.json({
            message: error
        })
    })
}

module.exports = {
    viewAll
}