import React, { useState, useEffect } from 'react';
import CarCard from './Reactcard';

export default function Carmodel() {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/cars');
                if (!response.ok) {
                    throw new Error('Failed to fetch cars');
                }
                const data = await response.json();
                setCars(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCars();
    }, []);

    if (loading) {
        return <div className="text-center py-10">Loading cars...</div>;
    }

    if (error) {
        return <div className="text-center py-10 text-red-500">{error}</div>;
    }


    return(
        <>
            <div className="container mx-auto md:p-6 mb-16">
                <div className="grid lg:grid-cols-3 gap-8 px-16">
                    {cars.map((car,index)=>(
                        <div key={index} className="">
                            <CarCard image={car.image} name={car.name} model={car.model} rent={car.rent} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}