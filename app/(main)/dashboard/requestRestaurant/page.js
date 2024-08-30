"use client"
import { axiosPrivate } from '@/app/components/Axios/axiosPrivate';
import React, { useEffect, useState } from 'react';

const requestRestaurant = () => {
   const [restaurants, setRestaurants] = useState([]);
   const [loading, setLoading] = useState(true);
 
   useEffect(() => {
     axiosPrivate.get('/requestRestaurant')
       .then((res) => {
         setRestaurants(res.data);
         setLoading(false); 
       })
       .catch((err) => {
         console.log(err);
         setLoading(false);
       });
   }, []);
 console.log(restaurants);
   if (loading) {
     return (
       <div className="flex justify-center items-center h-screen">
         <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
           <span className="visually-hidden">Loading...</span>
         </div>
       </div>
     );
   }
 
   return (
      <div>
      <div className="font-andika">
        <div className="flex justify-evenly my-5 text-lg md:text-xl font-semibold">
          <h2>All Restaurants</h2>
          <h2>Total Restaurants: {restaurants.length}</h2>
        </div>
        <hr />
        <div className="overflow-x-auto mt-5">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr className="text-red-900 text-center bg-brand-color">
                <th>#</th>
                <th>Restaurant Name</th>
                <th>Owner Name</th>
                <th>Email</th>
                <th>Location</th>
                <th>More Info</th>
              </tr>
            </thead>
            <tbody>
              {restaurants.map((user, index) => (
                <tr key={user._id} className="text-center">
                  <td>{index + 1}</td>
                  <td>{user.restaurantName}</td>
                  <td>{user.ownerName}</td>
                  <td>{user.email}</td>
                  <td>{user.location}</td>
                  <td>{user.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
   );
};

export default requestRestaurant;