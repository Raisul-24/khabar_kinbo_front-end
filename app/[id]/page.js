// app/[id]/page.js

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import LocationAndFoodInput from '../components/searchInput/searchInput';
import RestruntCard from '../components/restruntCard/restruntCard';

const Restaurant = async ({ params }) => {
    const { id } = params; // Get the restaurant ID from the URL

    let restaurant = null;
    let error = null;
    // console.log(params);

    // Fetch restaurant data
    try {
        const response = await fetch(`http://localhost:5000/api/restaurant?location=${id}`); // Replace with your API URL
        // console.log(response);

        if (!response.ok) {
            throw new Error('Failed to fetch the restaurant');
        }
        restaurant = await response.json(); // Parse the JSON data
        // console.log(res);

    } catch (err) {
        error = err.message; // Capture any error
    }

    // Handle error state
    if (error) {
        return (
            <div className='bg-white'>
                <Navbar />
                <LocationAndFoodInput />
                <main className='p-4'>
                    <div className='flex items-center justify-center'>
                        <h1 className="text-2xl md:text-3xl pl-2 my-2 border-l-4 font-sans font-bold border-teal-400 dark:text-gray-200">
                            Error: {error}
                        </h1>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    // Handle case where no restaurant is found
    if (!restaurant) {
        return (
            <div className='bg-white'>
                <Navbar />
                <LocationAndFoodInput />
                <main className='p-4'>
                    <div className='flex items-center justify-center'>
                        <h1 className="text-2xl md:text-3xl pl-2 my-2 border-l-4 font-sans font-bold border-teal-400 dark:text-gray-200">
                            No restaurant found for ID: {id}
                        </h1>
                    </div>

                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className='bg-white'>
            <Navbar />
            <LocationAndFoodInput />
            <main className='p-4'>
                <div className='flex items-center justify-center'>
                    <h1 className="text-2xl md:text-3xl pl-2 my-2 border-l-4 font-sans font-bold border-teal-400 dark:text-gray-200">
                        {restaurant?.length}  Restruents in {id}
                    </h1>
                </div>
                <div className='grid grid-cols-3 justify-center	justify-items-center'>
                    {restaurant?.map((restaurant, index) => (
                        <RestruntCard key={index} restaurant={restaurant} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Restaurant;
