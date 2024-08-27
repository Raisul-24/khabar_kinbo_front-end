// components/DashboardLayout.js
"use client";
import React, { useState } from "react";
import Sidebar from "./sidebar"; // Your custom sidebar component
import DashboardNavbar from "../../navbar/dashboardNavbar"; // Your custom navbar component

const DashboardLayout = ({ children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="flex flex-col flex-1">
                <DashboardNavbar toggleSidebar={toggleSidebar} />
                <main className="flex-1 p-4 ml-0 lg:ml-64 bg-lime-100 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
