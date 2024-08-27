// components/Sidebar.js
"use client";
import React from "react";
import Link from "next/link";

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-amber-50 text-black lg:translate-x-0 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <button
                className="absolute top-5 right-4 lg:hidden"
                onClick={toggleSidebar}
            >
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
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
            <div className="p-4">
                <h2 className="text-2xl font-bold">Dashboard</h2>
                <nav className="mt-8">
                    <ul>
                        <li>
                            <Link href="/dashboard/overview" className="block py-2">Overview</Link>
                        </li>
                        <li>
                            <Link href="/dashboard/settings" className="block py-2">Settings</Link>
                        </li>
                        <li>
                            <Link href="/" className="block py-2">Home</Link>
                        </li>
                        <li>
                            <Link href="/dashboard/dashboard" className="block py-2">Home2</Link>
                        </li>
                        {/* Add more links as needed */}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
