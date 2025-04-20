const mongoose = require('mongoose');

const DB = 'mongodb://localhost:27017/vehicleRentalDB';
mongoose.connect(DB).then(
    ()=>{
        console.log("DB connected...")
    })
