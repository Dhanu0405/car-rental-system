const mongoose = require('mongoose');

// const DB = 'mongodb://localhost:27017/vehicleRentalDB';
const DB = 'mongodb+srv://dhanush:Dhanu@0405r@cluster0.i0osx.mongodb.net/vehicleRentalDB?retryWrites=true&w=majority';
mongoose.connect(DB).then(
    ()=>{
        console.log("DB connected...")
    })
