"use client"
import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation'; 
import { Contex } from '@/provider/contexProvider';
const LoginInput = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter(); 
    const { signIn } = useContext(Contex);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can handle form submission, e.g., send data to the server
        console.log('Email:', email);
        console.log('Password:', password);

        signIn(email, password)
        .then((result) => {
          console.log(result.user);
  
          if (result.user.email) {
            Swal.fire("Login success!", "Welcome to our resturent", "success");
          }
          router.push("/");
        })
  
        .catch((error) => {
          console.error(error);
          Swal.fire("Login failed", "Email or password is incorrect", "error");
        });


    };

    return (
        <div>
            <form className="mt-6" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-gray-700">Email Address</label>
                    <input
                        type="email"
                        placeholder="Enter Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                        autoFocus
                        required
                    />
                </div>

                <div className="mt-4">
                    <label className="block text-gray-700">Password</label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        minLength="6"
                        className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                        required
                    />
                </div>

                <div className="text-right mt-2">
                    <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
                </div>

                <button type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">
                    Log In
                </button>
            </form>
        </div>
    );
};

export default LoginInput;
