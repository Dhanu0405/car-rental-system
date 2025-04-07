import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import axios from 'axios';
import { UserContext } from '../Context/Clientcontext';

export default function Reservation() {
    const location = useLocation();
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const carDetails = location.state?.carDetails;

    const [pickPlace, setPickPlace] = useState('');
    const [dropPlace, setDropPlace] = useState('');
    const [pickDate, setPickDate] = useState('');
    const [dropDate, setDropDate] = useState('');
    const [pickTime, setPickTime] = useState('');
    const [dropTime, setDropTime] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [showWarning, setShowWarning] = useState(false);

    const isReserveDisabled = !pickPlace || !dropPlace || !pickDate || !dropDate || !pickTime || !dropTime || 
                             !firstname || !lastname || !age || !phone || !email || !address || !city || !zipcode;

    const ReserveCar = async () => {
        if (isReserveDisabled) {
            setShowWarning(true);
            const timer = setTimeout(() => {
                setShowWarning(false);
            }, 1500);
            return;
        }

        if (!user) {
            navigate('/login');
            return;
        }

        try {
            const { data } = await axios.post('/reservation', {
                carDetails,
                pickPlace,
                dropPlace,
                pickDate,
                dropDate,
                pickTime,
                dropTime,
                firstname,
                lastname,
                age,
                phone,
                email,
                address,
                city,
                zipcode
            });
            navigate('/account/bookings');
        } catch (e) {
            console.log(e);
        }
    };

    if (!carDetails) {
        navigate('/model');
        return null;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
                <div className="bg-orange px-6 py-4">
                    <h2 className="text-white text-2xl font-bold">Complete Reservation for {carDetails.name}</h2>
                </div>

                <div className="bg-[#ffeae6] p-6">
                    <h3 className="text-orange text-xl font-bold">Upon completing this reservation enquiry, you will receive:</h3>
                    <p className="text-gray-600 mt-2">Your rental voucher to produce on arrival at the rental desk and a toll-free customer support number.</p>
                </div>

                <div className="p-6">
                    <div className="mb-8">
                        <h3 className="text-orange text-xl font-bold mb-4">Location & Date</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        <LocationOnOutlinedIcon /> Pick-up Location
                                    </label>
                                    <input
                                        type="text"
                                        value={pickPlace}
                                        onChange={(e) => setPickPlace(e.target.value)}
                                        className="w-full p-3 bg-[#dbdbdb] rounded focus:outline-none"
                                        placeholder="Enter pick-up location"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        <CalendarMonthOutlinedIcon /> Pick-up Date
                                    </label>
                                    <input
                                        type="date"
                                        value={pickDate}
                                        onChange={(e) => setPickDate(e.target.value)}
                                        className="w-full p-3 bg-[#dbdbdb] rounded focus:outline-none"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 font-semibold mb-2">Pick-up Time</label>
                                    <input
                                        type="time"
                                        value={pickTime}
                                        onChange={(e) => setPickTime(e.target.value)}
                                        className="w-full p-3 bg-[#dbdbdb] rounded focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        <LocationOnOutlinedIcon /> Drop-off Location
                                    </label>
                                    <input
                                        type="text"
                                        value={dropPlace}
                                        onChange={(e) => setDropPlace(e.target.value)}
                                        className="w-full p-3 bg-[#dbdbdb] rounded focus:outline-none"
                                        placeholder="Enter drop-off location"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        <CalendarMonthOutlinedIcon /> Drop-off Date
                                    </label>
                                    <input
                                        type="date"
                                        value={dropDate}
                                        onChange={(e) => setDropDate(e.target.value)}
                                        className="w-full p-3 bg-[#dbdbdb] rounded focus:outline-none"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 font-semibold mb-2">Drop-off Time</label>
                                    <input
                                        type="time"
                                        value={dropTime}
                                        onChange={(e) => setDropTime(e.target.value)}
                                        className="w-full p-3 bg-[#dbdbdb] rounded focus:outline-none"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-orange text-xl font-bold mb-4">Personal Information</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-semibold mb-2">First Name</label>
                                    <input
                                        type="text"
                                        value={firstname}
                                        onChange={(e) => setFirstname(e.target.value)}
                                        className="w-full p-3 bg-[#dbdbdb] rounded focus:outline-none"
                                        placeholder="Enter first name"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="w-full p-3 bg-[#dbdbdb] rounded focus:outline-none"
                                        placeholder="Enter phone number"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 font-semibold mb-2">Email</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full p-3 bg-[#dbdbdb] rounded focus:outline-none"
                                        placeholder="Enter email"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 font-semibold mb-2">City</label>
                                    <input
                                        type="text"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        className="w-full p-3 bg-[#dbdbdb] rounded focus:outline-none"
                                        placeholder="Enter city"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-semibold mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        value={lastname}
                                        onChange={(e) => setLastName(e.target.value)}
                                        className="w-full p-3 bg-[#dbdbdb] rounded focus:outline-none"
                                        placeholder="Enter last name"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 font-semibold mb-2">Age</label>
                                    <input
                                        type="number"
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                        className="w-full p-3 bg-[#dbdbdb] rounded focus:outline-none"
                                        placeholder="Enter age"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 font-semibold mb-2">Address</label>
                                    <input
                                        type="text"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        className="w-full p-3 bg-[#dbdbdb] rounded focus:outline-none"
                                        placeholder="Enter address"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 font-semibold mb-2">Zip Code</label>
                                    <input
                                        type="text"
                                        value={zipcode}
                                        onChange={(e) => setZipcode(e.target.value)}
                                        className="w-full p-3 bg-[#dbdbdb] rounded focus:outline-none"
                                        placeholder="Enter zip code"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {showWarning && (
                        <div className="bg-[#dbdbdb] p-4 mb-6 text-center">
                            <p className="text-orange">Please fill all the required fields.</p>
                        </div>
                    )}

                    <div className="flex justify-center">
                        <button
                            onClick={ReserveCar}
                            className="bg-orange text-white px-8 py-3 rounded font-semibold hover:bg-opacity-90 transition-colors"
                        >
                            Reserve Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}