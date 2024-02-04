const mongoose = require('mongoose');
const db = require('../config/db');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const vehicalSchema = new Schema({
    vehicalId: {
        type: String,
        required: true,
    },
    lat: {
        type: String,
        required: true,
    },
    lan: {
        type: String,
        required: true,
    },
    timeStamp: {
        type: String,
        required: true,
    }
});

const VehicalModel = db.model('vehical', vehicalSchema);

module.exports = VehicalModel;
