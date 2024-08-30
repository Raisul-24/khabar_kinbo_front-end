"use client";
import React, { useEffect, useState } from 'react';
import { axiosPrivate } from '@/app/components/Axios/axiosPrivate';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    axiosPrivate.get('/users')
      .then((res) => {
        setUsers(res.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []);

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
          <h2>All Users</h2>
          <h2>Total Users: {users.length}</h2>
        </div>
        <hr />
        <div className="overflow-x-auto mt-5">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr className="text-red-900 text-center bg-brand-color">
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id} className="text-center">
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.address}</td>
                  <td>Not define</td>
                 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
