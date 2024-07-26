"use client"
import React, { useState } from 'react';
import { FaLocationCrosshairs } from "react-icons/fa6";
import axios from 'axios';
const LocationInput = () => {
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleGetLocation = () => {
        if (navigator.geolocation) {
            setIsLoading(true);
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    getLocationName(latitude, longitude);
                },
                (error) => {
                    console.error("Error getting location:", error);
                    setIsLoading(false);
                }
            );
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    };

    const getLocationName = async (latitude, longitude) => {
        try {
            const response = await axios.get(`https://nominatim.openstreetmap.org/reverse`, {
                params: {
                    lat: latitude,
                    lon: longitude,
                    format: 'json',
                    addressdetails: 1
                }
            });

            if (response.data) {
                const address = response.data.display_name;
                setInputValue(address);
            } else {
                console.error('Error fetching location name');
            }
        } catch (error) {
            console.error('Error fetching location name:', error);
        } finally {
            setIsLoading(false);
        }
    };
    return(
        <>
        <div className="relative z-30 text-base text-black">
                        <input 
                            type="text" 
                            value={inputValue} 
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Keyword" 
                            className="mt-2 shadow-md focus:outline-none rounded-2xl py-3 px-6 block w-full pl-12" // Add padding to make space for the icon
                        />
                        <div
                            className="absolute top-2 left-2 cursor-pointer"
                            onClick={handleGetLocation}
                        >
                           <FaLocationCrosshairs className='h-8 w-8' />
                        </div>
                        <div
                            className="text-left absolute top-10 rounded-t-none rounded-b-2xl shadow bg-white divide-y w-full max-h-40 overflow-auto"
                        >
                        </div>
                    </div>
        </>
    )
}

export default LocationInput;