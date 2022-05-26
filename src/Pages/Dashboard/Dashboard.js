import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.config';

const Dashboard = () => {
    const [user] = useAuthState(auth);

    return (
        <div class="drawer drawer-mobile ">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
            <h2 className='text-4xl font-semibold text-purple-500 py-4'>Welcome to your Dashboard</h2>
            <Outlet></Outlet>
        </div>
        <div class="drawer-side">
            <label for="dashboard-sidebar" class="drawer-overlay"></label>
            <ul class="menu p-4 overflow-y-auto w-48 bg-purple-200 text-base-content">
                {user && <>
                <li><Link to="/dashboard">My Profile</Link></li>
                <li><Link to="/dashboard/myorders">My Orders</Link></li>
                <li><Link to="/dashboard/addreview">Add a review</Link></li>
                </>
                }
                {/* { admin && <>
                    <li><Link to="/dashboard/">My Profile </Link></li>
                    <li><Link to="/dashboard/">Add a </Link></li>
                    <li><Link to="/dashboard/">Manage </Link></li>
                </>} */}
            </ul>

        </div>
    </div>
);

};

export default Dashboard;