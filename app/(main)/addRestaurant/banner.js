"use client"
import Link from 'next/link';
import React from 'react';

const banner = () => {
  return (
    <div
      className="hero min-h-96 max-w-screen"
      style={{
        backgroundImage: "url(/addRestaurentBanner1.jpg)",
      }}>
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-neutral-content text-left">
        <div className="max-w-4xl">
          <h1 className="mb-5 text-xl md:text-3xl lg:text-5xl font-bold text-yellow-900">Partner with Khabar Kinbo <br></br>
           <span className='text-sm md:text-xl lg:text-4xl'> at 0% commission for the 1st three month!</span></h1>
          <p className="mb-5 font-bold text-white text-xs md:text-sm lg:text-xl">
            And get ads worth 5k BDT. Valid for new restaurant partners in select cities.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-5 text-xs md:text-base'>
          <Link href='/'><button className="font-semibold border-2 px-3 py-2 rounded-xl border-yellow-700 hover:border-red-600 bg-yellow-50 hover:bg-white-100 text-red-400 hover:text-yellow-900"
               >Register your restaurant</button></Link>
             <Link href='/'><button className="font-semibold border-2 px-3 py-2 rounded-xl border-yellow-700 hover:border-red-600 bg-red-50 hover:bg-white-100 text-red-400 hover:text-yellow-900"
               >Login to view your existing restaurant</button> </Link> 
          
          </div>
          <p className='text-white text-xs md:text-base text-center mt-5'>Need help? Contact +880 1558-323489</p>
        </div>
      </div>
    </div>
  );
};

export default banner;