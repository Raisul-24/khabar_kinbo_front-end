"use client";
import React from 'react';

import { useForm } from 'react-hook-form';
import axios from 'axios';
import { axiosPrivate } from '@/app/components/Axious/axiosprivate';
import { toast } from 'react-hot-toast';

export default function RegisterRestaurant() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    console.log(data)
    try {
      const response = await axiosPrivate.post('/requestRestaurant', data);
      console.log('Success:', response.data);
      // Handle success (e.g., show a success message, redirect, etc.)
      toast.promise(
        saveSettings(settings),
         {
           loading: 'Saving...',
           success: <b>Request Restaurant submitted Successfully! <br></br> 
           You'll be notified later</b>,
           error: <b>Something Wrong! Please try again later.</b>
         }
       );
    } 
    catch (error) {
      console.error('Error:', error);
      // Handle error (e.g., show an error message)
      toast.error("Something Wrong! Please try again later.")
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-6">Register Your Restaurant</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Restaurant Name</label>
          <input
            {...register('restaurantName', { required: true })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter restaurant name"
          />
          {errors.restaurantName && <span className="text-red-500 text-sm">This field is required</span>}
        </div>

        <div>
          <label className="block text-sm font-medium">Owner's Name</label>
          <input
            {...register('ownerName', { required: true })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter owner's name"
          />
          {errors.ownerName && <span className="text-red-500 text-sm">This field is required</span>}
        </div>

        <div>
          <label className="block text-sm font-medium">Location</label>
          <input
            {...register('location', { required: true })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="e.g., Dhaka, Chattogram"
          />
          {errors.location && <span className="text-red-500 text-sm">This field is required</span>}
        </div>

        <div>
          <label className="block text-sm font-medium">Cuisine Type</label>
          <input
            {...register('cuisineType', { required: true })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="e.g., Bangladeshi, Indian, Chinese"
          />
          {errors.cuisineType && <span className="text-red-500 text-sm">This field is required</span>}
        </div>

        <div>
          <label className="block text-sm font-medium">Contact Number</label>
          <input
            type="tel"
            {...register('contactNumber', { required: true, pattern: /^\+880\d{10}$/ })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="+880XXXXXXXXXX"
          />
          {errors.contactNumber && <span className="text-red-500 text-sm">Enter a valid Bangladeshi number</span>}
        </div>

        <div>
          <label className="block text-sm font-medium">Email Address</label>
          <input
            type="email"
            {...register('email', { required: true })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter email address"
          />
          {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
        </div>

        <div>
          <label className="block text-sm font-medium">Business License Number</label>
          <input
            {...register('businessLicense', { required: true })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter business license number"
          />
          {errors.businessLicense && <span className="text-red-500 text-sm">This field is required</span>}
        </div>

        <div>
          <label className="block text-sm font-medium">TIN Number</label>
          <input
            {...register('tinNumber', { required: true })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter TIN number"
          />
          {errors.tinNumber && <span className="text-red-500 text-sm">This field is required</span>}
        </div>

        <div>
          <label className="block text-sm font-medium">Delivery Options</label>
          <select
            {...register('deliveryOptions', { required: true })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          >
            <option value="">Select an option</option>
            <option value="self_delivery">Self Delivery</option>
            <option value="partner_delivery">Partner with Platform Delivery</option>
          </select>
          {errors.deliveryOptions && <span className="text-red-500 text-sm">This field is required</span>}
        </div>

        <div>
          <label className="block text-sm font-medium">Bank Account Details</label>
          <input
            {...register('bankAccount', { required: true })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter bank account number"
          />
          {errors.bankAccount && <span className="text-red-500 text-sm">This field is required</span>}
        </div>

        <button
          type="submit"
          className="mt-4 w-full py-2 bg-green-600 text-white font-bold rounded-md"
        >
          Register
        </button>
      </form>
    </div>
  );
}

