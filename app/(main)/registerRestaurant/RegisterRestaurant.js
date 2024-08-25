"use client";
import React from 'react';
import { useForm } from 'react-hook-form';
import { axiosPrivate } from '@/app/components/Axios/axiosprivate';
import { toast } from 'react-hot-toast';

export default function RegisterRestaurant() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    console.log('Data to be sent:', data);
    
    try {
      const response = await axiosPrivate.post('/requestRestaurant', data);
      // console.log('Success:', response.data);

      toast.success(response.data.message || 'Restaurant submitted successfully! You\'ll be notified later.');

      reset();

    } catch (error) {
      // console.error('Error:', error);

      const errorMessage = error.response?.data?.error || 'Something went wrong! Please try again later.';
      toast.error(errorMessage);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-6">Register Your Restaurant</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Restaurant Name */}
        <div>
          <label className="block text-sm font-medium">Restaurant Name</label>
          <input
            {...register('restaurantName', { required: 'Restaurant name is required.' })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter restaurant name"
          />
          {errors.restaurantName && <span className="text-red-500 text-sm">{errors.restaurantName.message}</span>}
        </div>

        {/* Owner's Name */}
        <div>
          <label className="block text-sm font-medium">Owner's Name</label>
          <input
            {...register('ownerName', { required: 'Owner name is required.' })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter owner's name"
          />
          {errors.ownerName && <span className="text-red-500 text-sm">{errors.ownerName.message}</span>}
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium">Location</label>
          <input
            {...register('location', { required: 'Location is required.' })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="e.g., Dhaka, Chattogram"
          />
          {errors.location && <span className="text-red-500 text-sm">{errors.location.message}</span>}
        </div>

        {/* Cuisine Type */}
        <div>
          <label className="block text-sm font-medium">Cuisine Type</label>
          <input
            {...register('cuisineType', { required: 'Cuisine type is required.' })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="e.g., Bangladeshi, Indian, Chinese"
          />
          {errors.cuisineType && <span className="text-red-500 text-sm">{errors.cuisineType.message}</span>}
        </div>

        {/* Contact Number */}
        <div>
          <label className="block text-sm font-medium">Contact Number</label>
          <input
            type="tel"
            {...register('contactNumber', {
              required: 'Contact number is required.',
              pattern: {
                value: /^\+880\d{10}$/,
                message: 'Enter a valid Bangladeshi contact number.'
              }
            })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="+880XXXXXXXXXX"
          />
          {errors.contactNumber && <span className="text-red-500 text-sm">{errors.contactNumber.message}</span>}
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-sm font-medium">Email Address</label>
          <input
            type="email"
            {...register('email', {
              required: 'Email address is required.',
              pattern: {
                value: /.+\@.+\..+/,
                message: 'Enter a valid email address.'
              }
            })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter email address"
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
        </div>

        {/* Business License Number */}
        <div>
          <label className="block text-sm font-medium">Business License Number</label>
          <input
            {...register('businessLicense', { required: 'Business license number is required.' })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter business license number"
          />
          {errors.businessLicense && <span className="text-red-500 text-sm">{errors.businessLicense.message}</span>}
        </div>

        {/* TIN Number */}
        <div>
          <label className="block text-sm font-medium">TIN Number</label>
          <input
            {...register('tinNumber', { required: 'TIN number is required.' })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter TIN number"
          />
          {errors.tinNumber && <span className="text-red-500 text-sm">{errors.tinNumber.message}</span>}
        </div>

        {/* Delivery Options */}
        <div>
          <label className="block text-sm font-medium">Delivery Options</label>
          <select
            {...register('deliveryOptions', { required: 'Delivery option is required.' })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          >
            <option value="">Select an option</option>
            <option value="self_delivery">Self Delivery</option>
            <option value="partner_delivery">Partner with Platform Delivery</option>
          </select>
          {errors.deliveryOptions && <span className="text-red-500 text-sm">{errors.deliveryOptions.message}</span>}
        </div>

        {/* Bank Account Details */}
        <div>
          <label className="block text-sm font-medium">Bank Account Details</label>
          <input
            {...register('bankAccount', { required: 'Bank account details are required.' })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter bank account number"
          />
          {errors.bankAccount && <span className="text-red-500 text-sm">{errors.bankAccount.message}</span>}
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
