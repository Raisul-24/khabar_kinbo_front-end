"use client"
import Link from 'next/link';
import React from 'react';

const banner = () => {
  return (
    <div
      className="hero min-h-80 rounded-xl my-10"
      style={{
        backgroundImage: "url(/addRestaurentBanner2.jpg)",
      }}>
      <div className="hero-overlay bg-opacity-70 rounded-xl"></div>
      <div className="hero-content  text-left">
        <div className="max-w-5xl text-left">
          <h1 className="mb-5 text-xl md:text-3xl font-bold text-yellow-900">
            Start your journey with Khabar Kinbo</h1>
          <p className="mb-5 font-bold text-white text-sm md:text-lg">
            Create your restaurant page and register for online ordering
          </p>
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-5'>
            <Link href='/'><button className="font-semibold border-2 px-6 py-2 rounded-xl border-yellow-700 hover:border-red-600 bg-yellow-50 hover:bg-white-100 text-red-400 hover:text-yellow-900"
            >Start Now</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default banner;