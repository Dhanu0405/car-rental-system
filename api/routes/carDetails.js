const express = require('express');
const router = express.Router();
const CarDetails = require('../models/carDetailsDB');

// Get all cars
router.get('/', async (req, res) => {
    try {
        const cars = await CarDetails.find();
        res.json(cars);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a specific car
router.get('/:id', async (req, res) => {
    try {
        const car = await CarDetails.findById(req.params.id);
        if (car) {
            res.json(car);
        } else {
            res.status(404).json({ message: 'Car not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new car
router.post('/', async (req, res) => {
    const car = new CarDetails({
        name: req.body.name,
        model: req.body.model,
        price: req.body.price,
        year: req.body.year,
        type: req.body.type,
        transmission: req.body.transmission,
        fuel: req.body.fuel,
        image: req.body.image,
        description: req.body.description,
        specifications: {
            doors: req.body.specifications.doors,
            luggage: req.body.specifications.luggage,
            passengers: req.body.specifications.passengers,
            airConditioner: req.body.specifications.airConditioner
        }
    });

    try {
        const newCar = await car.save();
        res.status(201).json(newCar);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update a car
router.patch('/:id', async (req, res) => {
    try {
        const car = await CarDetails.findById(req.params.id);
        if (car) {
            Object.keys(req.body).forEach(key => {
                if (key === 'specifications') {
                    Object.keys(req.body.specifications).forEach(specKey => {
                        car.specifications[specKey] = req.body.specifications[specKey];
                    });
                } else {
                    car[key] = req.body[key];
                }
            });
            const updatedCar = await car.save();
            res.json(updatedCar);
        } else {
            res.status(404).json({ message: 'Car not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a car
router.delete('/:id', async (req, res) => {
    try {
        const car = await CarDetails.findById(req.params.id);
        if (car) {
            await car.remove();
            res.json({ message: 'Car deleted' });
        } else {
            res.status(404).json({ message: 'Car not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;