// pages/restaurant/[id].js

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import LocationAndFoodInput from '../components/searchInput/searchInput';


const Restaurant = ({ params }) => {
    const { id } = params; // 
    // console.log(id);
    // https://componentland.com/component/product-card-2

    // Check if the ID is available
    if (!id) {
        return <p>Loading...</p>; // Handle loading state
    }
    return (
        <div className='bg-white'>
            <Navbar />
            <LocationAndFoodInput></LocationAndFoodInput>
            <main className='p-4'>
                <div className='flex items-center justify-center'>
                    <h1 className="text-2xl md:text-3xl pl-2 my-2 border-l-4 font-sans font-bold border-teal-400 dark:text-gray-200">
                        Restruents in {id}
                    </h1>
                </div>

            </main>

            <Footer />
        </div>
    );
};

export default Restaurant;
