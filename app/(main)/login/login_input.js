"use client"
import React, { useContext, useState } from 'react';
import { useRouter } from 'next/navigation'; 
import {  Context } from '@/provider/contextProvider';
import { toast } from 'react-hot-toast';
const LoginInput = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const { signIn } = useContext(Context);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const result = await signIn(email, password);
            if (result.user) {
                toast.success("You've successfully logged in!");
                router.push('/');
            }
        } catch (error) {
            toast.error("Something went wrong. Try again later....");
        }
    };

    return (
        <div>
            <form className="mt-6" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-black">Email Address</label>
                    <input
                        type="email"
                        placeholder="Enter Email Address..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-red-50 mt-2 border-2 border-red-200 focus:border-amber-500 focus:bg-yellow-50 focus:outline-none"
                        autoFocus
                        required
                    />
                </div>

                <div className="mt-4">
                    <label className="block text-black">Password</label>
                    <input
                        type="password"
                        placeholder="Enter Password..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        minLength="6"
                        className="w-full px-4 py-3 rounded-lg bg-red-50 mt-2 border-2 border-red-200 focus:border-amber-500 focus:bg-yellow-50 focus:outline-none"
                        required
                    />
                </div>

                {/* <div className="text-right mt-2">
                    <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
                </div> */}

                <button type="submit" className="w-full block mt-6 font-semibold border-2 px-4 py-3 rounded-xl border-yellow-700 hover:border-red-600 bg-yellow-50 hover:bg-white-100 text-red-400 hover:text-yellow-900">
                    Log In
                </button>
            </form>
        </div>
    );
};

export default LoginInput;
