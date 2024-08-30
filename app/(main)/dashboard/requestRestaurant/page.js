"use client";
import { axiosPrivate } from '@/app/components/Axios/axiosPrivate';
import React, { useEffect, useRef, useState } from 'react';
import { BsFillInfoSquareFill } from "react-icons/bs";

const RequestRestaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const modalRef = useRef(null);

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

  const openModal = (restaurant) => {
    setSelectedRestaurant(restaurant);
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const closeModal = () => {
    setSelectedRestaurant(null);
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  const handleAccept = () => {
    console.log("Restaurant Accepted:", selectedRestaurant);
    closeModal();
  };

  const handleReject = () => {
    console.log("Restaurant Rejected:", selectedRestaurant);
    closeModal();
  };

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
                <th>Location</th>
                <th>More Info</th>
              </tr>
            </thead>
            <tbody>
              {restaurants.map((restaurant, index) => (
                <tr key={restaurant._id} className="text-center">
                  <td>{index + 1}</td>
                  <td>{restaurant.restaurantName}</td>
                  <td>{restaurant.ownerName}</td>
                  <td>{restaurant.location}</td>
                  <td>
                    <button
                      className="bg-transparent text-2xl"
                      onClick={() => openModal(restaurant)}
                    >
                      <BsFillInfoSquareFill className='text-red-900' />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      <dialog ref={modalRef} id="restaurant_modal" className="modal">
        {selectedRestaurant && (
          <div className="modal-box bg-amber-50">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-red-900" onClick={closeModal}>✕</button>
            <h3 className="font-bold text-lg mb-4">Restaurant Name: {selectedRestaurant.restaurantName}</h3>
            <p><strong>Owner Name:</strong> {selectedRestaurant.ownerName}</p>
            <p><strong>Email:</strong> {selectedRestaurant.email}</p>
            <p><strong>Phone:</strong> {selectedRestaurant.contactNumber}</p>
            <p><strong>Location:</strong> {selectedRestaurant.location}</p>
            <p><strong>Cuisine Type:</strong> {selectedRestaurant.cuisineType}</p>
            <p><strong>Business License:</strong> {selectedRestaurant.businessLicense}</p>
            <p><strong>TIN Number:</strong> {selectedRestaurant.tinNumber}</p>
            <p><strong>Delivery Options:</strong> {selectedRestaurant.deliveryOptions}</p>
            <p><strong>Bank Account:</strong> {selectedRestaurant.bankAccount}</p>
           <div className="mt-4 flex justify-end space-x-4">
              <button className="btn btn-sm btn-success" onClick={handleAccept}>Accept</button>
              <button className="btn btn-sm btn-error" onClick={handleReject}>Reject</button>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
};

export default RequestRestaurant;
