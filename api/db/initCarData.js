require('dotenv').config();
const mongoose = require('mongoose');
const CarDetails = require('../models/carDetailsDB');

// MongoDB connection options
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
};

// Sample car data
const carData = [
    {
        name: "Audi A1",
        model: "Audi",
        price: "$ 45",
        year: "2023",
        type: "Sedan",
        transmission: "Automatic",
        fuel: "Petrol",
        image: "https://raw.githubusercontent.com/your-repo/car-images/main/realaudi.png",
        description: "Luxury compact car with premium features and excellent performance",
        specifications: {
            doors: "4",
            luggage: "2",
            passengers: "5",
            airConditioner: true
        }
    },
    {
        name: "Golf 6",
        model: "VW",
        price: "$ 37",
        year: "2023",
        type: "Hatchback",
        transmission: "Manual",
        fuel: "Petrol",
        image: "https://raw.githubusercontent.com/your-repo/car-images/main/realgolf.png",
        description: "Versatile hatchback with excellent handling and fuel efficiency",
        specifications: {
            doors: "5",
            luggage: "3",
            passengers: "5",
            airConditioner: true
        }
    },
    {
        name: "Toyota Camry",
        model: "Camry",
        price: "$ 30",
        year: "2023",
        type: "Sedan",
        transmission: "Automatic",
        fuel: "Hybrid",
        image: "https://raw.githubusercontent.com/your-repo/car-images/main/realtoyota.png",
        description: "Reliable sedan with excellent fuel economy and comfortable interior",
        specifications: {
            doors: "4",
            luggage: "3",
            passengers: "5",
            airConditioner: true
        }
    },
    {
        name: "BMW 320",
        model: "ModernLine",
        price: "$ 35",
        year: "2023",
        type: "Sedan",
        transmission: "Automatic",
        fuel: "Petrol",
        image: "https://raw.githubusercontent.com/your-repo/car-images/main/realbmw.png",
        description: "Sporty sedan with dynamic performance and luxury features",
        specifications: {
            doors: "4",
            luggage: "2",
            passengers: "5",
            airConditioner: true
        }
    },
    {
        name: "Mercedes GLK",
        model: "Benz GLK",
        price: "$ 50",
        year: "2023",
        type: "SUV",
        transmission: "Automatic",
        fuel: "Diesel",
        image: "https://raw.githubusercontent.com/your-repo/car-images/main/realbenz.png",
        description: "Luxury SUV with commanding presence and advanced technology",
        specifications: {
            doors: "5",
            luggage: "4",
            passengers: "5",
            airConditioner: true
        }
    },
    {
        name: "VW Passat",
        model: "CC",
        price: "$ 25",
        year: "2023",
        type: "Sedan",
        transmission: "Automatic",
        fuel: "Petrol",
        image: "https://raw.githubusercontent.com/your-repo/car-images/main/realpassat.png",
        description: "Elegant sedan with comfortable ride and modern features",
        specifications: {
            doors: "4",
            luggage: "3",
            passengers: "5",
            airConditioner: true
        }
    }
];

async function initializeCarData() {
    let connection;
    try {
        // Connect to MongoDB
        const DB = 'mongodb://127.0.0.1:27017/vehicleRentalDB';
        connection = await mongoose.connect(DB, options);
        console.log('Connected to MongoDB...');

        // Clear existing data
        await CarDetails.deleteMany({});
        console.log('Cleared existing car data...');

        // Insert new car data
        const result = await CarDetails.insertMany(carData);
        console.log(`${result.length} cars have been added to the database`);

    } catch (error) {
        console.error('Error initializing car data:', error);
        process.exit(1);
    } finally {
        if (connection) {
            // Disconnect from MongoDB
            await mongoose.connection.close();
            console.log('Database connection closed.');
        }
    }
}

// Run the initialization
initializeCarData();