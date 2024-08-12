import React from 'react';
import { FaMapLocationDot } from "react-icons/fa6";
import { IoRestaurantSharp } from "react-icons/io5";
import { GiCash } from "react-icons/gi";

const chooseUs = () => {
   return (
      <div className='bg-white py-10 md:py-16 px-2'>
         <div className='mx-auto max-w-4xl'>
            <h1 className='text-sm md:text-2xl lg:text-3xl text-center font-bold md:font-extrabold'>Why should you partner with Khabar-Kinbo?</h1>
            <p className='text-xs md:text-base lg:text-xl mt-1 md:mt-3 text-center'>Khabar-Kinbo enables you to get 60% more revenue, 10x new customers and boost your brand visibility by providing insights to improve your business.</p>
         </div>
         

         <div className='flex justify-center mt-5 md:mt-10'>
         <div className="stats shadow-xl bg-deep-orange-50">
  <div className="stat">
    <div className="stat-figure text-primary text-5xl">
    <FaMapLocationDot />
    </div>
    
    <div className="stat-value text-primary">10+ areas </div>
    <div className="stat-title">in Dhaka City </div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary text-5xl">
    <IoRestaurantSharp />
    </div>
    <div className="stat-value text-secondary">100+</div>
    <div className="stat-title">restaurant listings</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary text-5xl">
    <GiCash />
    </div>
    <div className="stat-value">10K +</div>
    <div className="stat-title">monthly orders</div>
  </div>
</div>
         </div>
         
      </div>
   );
};

export default chooseUs;