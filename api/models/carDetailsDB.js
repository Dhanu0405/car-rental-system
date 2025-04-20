const mongoose = require('mongoose');

const carDetailsSchema = new mongoose.Schema({
    name: String,
    model: String,
    price: String,
    year: String,
    type: String,
    transmission: String,
    fuel: String,
    image: String,
    description: String,
    specifications: {
        doors: String,
        luggage: String,
        passengers: String,
        airConditioner: Boolean
    }
});

const CarDetails = mongoose.model('CarDetails', carDetailsSchema);

module.exports = CarDetails;