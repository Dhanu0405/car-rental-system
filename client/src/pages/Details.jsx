import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Details() {
    const location = useLocation();
    const carDetails = location.state?.carDetails || {
        name: 'Car Not Found',
        model: 'N/A',
        image: '',
        specifications: {
            engine: 'N/A',
            transmission: 'N/A',
            fuelType: 'N/A',
            seatingCapacity: 'N/A',
            mileage: 'N/A'
        },
        features: [
            'Air Conditioning',
            'Power Steering',
            'Power Windows',
            'Anti-lock Braking System (ABS)',
            'Airbags'
        ],
        rentalInfo: {
            pricePerDay: 'N/A',
            deposit: 'N/A',
            minRentalPeriod: '1 day'
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Car Image and Basic Info */}
                <div className="md:flex">
                    <div className="md:w-1/2 p-8">
                        <img 
                            src={carDetails.image} 
                            alt={carDetails.name}
                            className="w-full h-auto object-contain"
                        />
                    </div>
                    <div className="md:w-1/2 p-8">
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">{carDetails.name}</h1>
                        <h2 className="text-xl text-gray-600 mb-6">{carDetails.model}</h2>
                        
                        {/* Rental Information */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Rental Information</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-gray-600">Price per Day</p>
                                    <p className="text-lg font-semibold">{carDetails.rentalInfo.pricePerDay}</p>
                                </div>
                                <div>
                                    <p className="text-gray-600">Security Deposit</p>
                                    <p className="text-lg font-semibold">{carDetails.rentalInfo.deposit}</p>
                                </div>
                                <div>
                                    <p className="text-gray-600">Minimum Rental Period</p>
                                    <p className="text-lg font-semibold">{carDetails.rentalInfo.minRentalPeriod}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Specifications */}
                <div className="p-8 bg-gray-50">
                    <h3 className="text-xl font-semibold mb-6 text-gray-800">Specifications</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-4 bg-white rounded-lg shadow">
                            <p className="text-gray-600">Engine</p>
                            <p className="text-lg font-semibold">{carDetails.specifications.engine}</p>
                        </div>
                        <div className="p-4 bg-white rounded-lg shadow">
                            <p className="text-gray-600">Transmission</p>
                            <p className="text-lg font-semibold">{carDetails.specifications.transmission}</p>
                        </div>
                        <div className="p-4 bg-white rounded-lg shadow">
                            <p className="text-gray-600">Fuel Type</p>
                            <p className="text-lg font-semibold">{carDetails.specifications.fuelType}</p>
                        </div>
                        <div className="p-4 bg-white rounded-lg shadow">
                            <p className="text-gray-600">Seating Capacity</p>
                            <p className="text-lg font-semibold">{carDetails.specifications.seatingCapacity}</p>
                        </div>
                        <div className="p-4 bg-white rounded-lg shadow">
                            <p className="text-gray-600">Mileage</p>
                            <p className="text-lg font-semibold">{carDetails.specifications.mileage}</p>
                        </div>
                    </div>
                </div>

                {/* Features */}
                <div className="p-8">
                    <h3 className="text-xl font-semibold mb-6 text-gray-800">Features</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                        {carDetails.features.map((feature, index) => (
                            <div key={index} className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}