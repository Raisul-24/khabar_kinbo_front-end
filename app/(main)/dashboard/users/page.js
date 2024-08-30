"use client"
import React, { useEffect, useState } from 'react';
import { axiosPrivate } from '@/app/components/Axios/axiosPrivate';
const Users = () => {
   const [users, setUsers] = useState(0);
   useEffect(() =>{
      axiosPrivate.get('/users')
      .then((res) =>{
         setUsers(res.data);
      })
      .catch((err)=>{
         console.log(err)
      })
   },[axiosPrivate])

   console.log(users);
   return (
      <div>
      <div className="font-andika">
        <div className="flex justify-evenly my-5 text-lg md:text-xl font-semibold">
          <h2 className="">All Users</h2>
          <h2 className="">Total Users: {users?.length}</h2>
        </div>
        <hr />
        <div className="overflow-x-auto mt-5">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr className="text-red-900 text-center bg-brand-color">
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Change Role</th>
                <th>Action</th>
              </tr>
            </thead>
            {/* <tbody>
              { users?.map((user) => (
                <tr key={user._id} className="text-center">
                  <th>
                    <div className="avatar">
                      {user?.photo ? (
                        <div className="w-10 rounded-full">
                          <img
                            src={user?.photo}
                            alt={user?.name}
                            className=""
                          />
                        </div>
                      ) : (
                        <p className="w-10 rounded-full bg-brand-color flex justify-center items-center text-lg text-white">
                          {user?.email.slice(0, 1).toUpperCase()}
                        </p>
                      )}
                    </div>
                  </th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <h2
                      className={`badge ${
                        user?.role === "admin" && "bg-green-900"
                      } ${user?.role === "user" && "bg-brand-color"} ${
                        user?.role === "worker" && "bg-yellow-700"
                      } border-none text-white capitalize`}
                    >
                      {user?.role}
                    </h2>
                  </td>
                  <td>
                    <select
                      onChange={(e) => handlechange(e, user?._id, user.email)}
                      className="select select-bordered select-sm w-full capitalize"
                      defaultValue={user?.role}
                    >
                      <option>user</option>
                      <option>worker</option>
                      <option>admin</option>
                    </select>
                  </td>
                  <td>
                    <button
                      className="btn btn-ghost btn-lg"
                      onClick={() => handleDelete(user?._id)}
                    >
                      <FaTrashAlt className="text-red-600"></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody> */}
          </table>
        </div>
      </div>
    </div>
   );
};

export default Users;