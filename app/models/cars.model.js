const mongoose = require('mongoose');

const CarsSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
     type: String,
     required: true
    },
    year: {
        type: Number,
        required: true
       },
    price: {
        type: String,
        required: true
       },

}, {
    timestamps: true
});

module.exports = mongoose.model('Cars', CarsSchema);
