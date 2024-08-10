// components/LocationAndFoodInput.js

import { useState } from 'react';
import LocationInput from '../hero/locationInput';

const LocationAndFoodInput = () => {
    const [location, setLocation] = useState(''); // State for the location
    const [foodItem, setFoodItem] = useState(''); // State for the food item

    // Function to handle location input
    const handleLocationClick = () => {
        // Set the default location to Dhaka when clicked
        const userLocation = "Dhaka"; 
        setLocation(userLocation);
    };

    return (
        <div className="flex items-center justify-center mt-10">
            <div className="border-2 border-gray-300 rounded-lg flex w-2/3">
                {/* Left Side for Location */}
                <div 
                    className="flex-1 p-4 border-r-2 border-gray-300 cursor-pointer hover:bg-gray-100 transition-colors"
                  
                >
                    <h2 className="text-lg font-semibold">Location:</h2>
                   
                    <LocationInput></LocationInput>
                </div>

                {/* Right Side for Food Item */}
                <div className="flex-1 p-4">
                    <h2 className="text-lg font-semibold">Food Item:</h2>
                    <input
                        type="text"
                        value={foodItem}
                        onChange={(e) => setFoodItem(e.target.value)} // Handle food item input
                        className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
                        placeholder="Enter your food item"
                    />
                </div>
            </div>
        </div>
    );
};

export default LocationAndFoodInput;
