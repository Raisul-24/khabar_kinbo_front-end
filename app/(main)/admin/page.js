import React, { useContext } from 'react';
import { Context } from '/provider/contextProvider';

const AdminDashboard = () => {
   //  const { user, role } = useContext();

    if (role !== 'admin') {
        return <div>Access Denied</div>;
    }

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <p>Welcome, {user?.displayName || user?.email}</p>
            {/* Add admin-specific functionalities here */}
        </div>
    );
};

export default AdminDashboard;
