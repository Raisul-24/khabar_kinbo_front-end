import Link from 'next/link';
import React from 'react';
import Marquee from 'react-fast-marquee';

const cards = () => {
   return (
      <div className='my-20'>
         <h1 className='text-lg md:text-3xl lg:text-5xl text-center font-bold md:font-extrabold'>Our Products</h1>
         <Marquee speed='25' pauseOnHover='false'>
            {/* card 1 */}
         <div className="card card-compact bg-orange-50 max-w-80 shadow-xl my-12 mx-5">
            <figure>
               <img className='w-full h-52'
                  src="/addrestaurants/event.svg"
                  alt="event" />
            </figure>
            <div className="card-body h-48">
               <h2 className="card-title">Events</h2>
               <p>Partner with us for Bangladesh’s grandest food & entertainment carnival - “Khabar-kinbo”...</p>
               <div className="card-actions justify-end">
                  <Link href='/'><button className='font-bold text-amber-700 hover:text-red-900'>Learn More</button></Link>
               </div>
            </div>
         </div>

         {/* card 2 */}
         <div className="card card-compact bg-orange-50 max-w-80 shadow-xl my-12 mx-5">
            <figure>
               <img className='w-full h-52'
                  src="/addrestaurants/listing.jpg"
                  alt="listing" />
            </figure>
            <div className="card-body h-48">
               <h2 className="card-title">Listings</h2>
               <p>A free app that allows you to manage your Khabar-kinbo listing directly from your smartphone</p>
               <div className="card-actions justify-end">
                  <Link href='/'><button className='font-bold text-amber-700 hover:text-red-900'>Learn More</button></Link>
               </div>
            </div>
         </div>


         {/* card 3 */}
         <div className="card card-compact bg-orange-50 max-w-80 shadow-xl my-12 mx-5">
            <figure>
               <img className='w-full h-52'
                  src="/addrestaurants/advertise.jpg"
                  alt="advertise" />
            </figure>
            <div className="card-body h-48">
               <h2 className="card-title">Advertise</h2>
               <p>For every marketing dollar spent, Khabar-kinbo returns over 8x the investment...</p>
               <div className="card-actions justify-end">
                  <Link href='/'><button className='font-bold text-amber-700 hover:text-red-900'>Learn More</button></Link>
               </div>
            </div>
         </div>

         {/* card 4 */}
         <div className="card card-compact bg-orange-50 max-w-80 shadow-xl my-12 mx-5">
            <figure>
               <img className='w-full h-52'
                  src="/addrestaurants/Hyperpure.svg"
                  alt="event" />
            </figure>
            <div className="card-body h-48">
               <h2 className="card-title">Hyperpure</h2>
               <p>Supplies fresh and high quality ingredients to restaurant for serving delicious meals...</p>
               <div className="card-actions justify-end">
                  <Link href='/'><button className='font-bold text-amber-700 hover:text-red-900'>Learn More</button></Link>
               </div>
            </div>
         </div>


         {/* card 5 */}
         <div className="card card-compact bg-orange-50 max-w-80 shadow-xl my-12 mx-5">
            <figure>
               <img className='w-full h-52'
                  src="/addrestaurants/delivery.jpg"
                  alt="ordering" />
            </figure>
            <div className="card-body h-48">
               <h2 className="card-title">Online Ordering</h2>
               <p>Start taking orders online from millions of users near you and deliver with Khabar-kinbo..</p>
               <div className="card-actions justify-end">
                  <Link href='/'><button className='font-bold text-amber-700 hover:text-red-900'>Learn More</button></Link>
               </div>
            </div>
         </div>
         </Marquee>


      </div>
   );
};

export default cards;