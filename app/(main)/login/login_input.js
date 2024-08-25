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
