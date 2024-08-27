// components/DashboardNavbar.js
"use client";
import React from "react";

const DashboardNavbar = ({ toggleSidebar }) => {
    return (
        <div className="flex items-center justify-between bg-gray-800 p-4 text-white">
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
            <h1 className="text-xl">Dashboard</h1>
        </div>
    );
};

export default DashboardNavbar;
