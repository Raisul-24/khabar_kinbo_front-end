// components/DashboardNavbar.js
"use client";
import React from "react";


const DashboardNavbar = ({ toggleSidebar }) => {
    return (
        <div className="p-4 bg-amber-50 text-red-900">
         <h1 className="hidden lg:flex justify-center ml-64 font-semibold">Welcome to Khabar-kinbo Dashboard !!</h1>
            <div className="flex lg:hidden items-center justify-between ">
            <button onClick={toggleSidebar} className="lg:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                    />
                </svg>
            </button>
            
            <h1 className="text-xl text-black">Dashboard</h1>
            </div>
        </div>
    );
};

export default DashboardNavbar;
