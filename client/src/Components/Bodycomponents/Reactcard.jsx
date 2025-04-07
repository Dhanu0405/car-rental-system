import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/Clientcontext';

export default function CarCard({image, name, model}){  // Removed rent from props
    const {user} = useContext(UserContext);
    const navigate = useNavigate();

    return(
        <div className="card w-full h-[400px] flex flex-col bg-white shadow-md rounded-lg overflow-hidden">
            <div className="h-[300px] w-full overflow-hidden">
                <img className='w-full h-full object-contain' src={image} alt={name}/>
            </div>
            <div className="px-4 py-2 text-center">
                <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
            </div>
            <div className="flex-1 flex items-end p-4">
                <div className="w-full flex gap-4">
                    <button
                        onClick={() => navigate('/details', {
                            state: {
                                carDetails: {
                                    name,
                                    model,
                                    image,
                                    specifications: {
                                        engine: '2.0L 4-Cylinder',
                                        transmission: 'Automatic',
                                        fuelType: 'Petrol',
                                        seatingCapacity: '5',
                                        mileage: '15 km/l'
                                    },
                                    features: [
                                        'Air Conditioning',
                                        'Power Steering',
                                        'Power Windows',
                                        'Anti-lock Braking System (ABS)',
                                        'Airbags'
                                    ],
                                    rentalInfo: {
                                        pricePerDay: '$ 45',
                                        deposit: '$ 500',
                                        minRentalPeriod: '1 day'
                                    }
                                }
                            }
                        })}
                        className="flex-1 bg-gray-800 text-white text-center py-2 rounded hover:bg-gray-700 transition-colors"
                    >
                        Check Details
                    </button>
                    <Link 
                        to={user ? '/reservation' : '/'} 
                        state={user ? {
                            carDetails: {
                                name,
                                model,
                                image
                            }
                        } : null}
                        className="flex-1 bg-orange text-white text-center py-2 rounded hover:bg-orange-600 transition-colors"
                    >
                        Reserve Now
                    </Link>
                </div>
            </div>
        </div>
    )
}