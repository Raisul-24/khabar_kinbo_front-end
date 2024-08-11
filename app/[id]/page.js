// pages/restaurant/[id].js

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import LocationAndFoodInput from '../components/searchInput/searchInput';


const Restaurant = ({ params }) => {
    const { id } = params; // 
    // console.log(id);
    

    // Check if the ID is available
    if (!id) {
        return <p>Loading...</p>; // Handle loading state
    }
    return (
        <div className='bg-white'>
            <Navbar />
            <LocationAndFoodInput></LocationAndFoodInput>
            <main className='p-4'>
                <h1 className='text-2xl font-bold mb-4'>Restaurant ID: {id}</h1>
                <p>
                    Welcome to the restaurant page! Here you can find information about restaurant with ID: {id}.
                </p>
                {/* Add more content or fetch restaurant data using the ID */}
            </main>

            <Footer />
        </div>
    );
};

export default Restaurant;
