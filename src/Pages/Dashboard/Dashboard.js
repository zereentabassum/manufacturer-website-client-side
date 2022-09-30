import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.config';
import useAdmin from '../useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const[admin] = useAdmin(user);

    return (
        <div className="drawer drawer-mobile ">
        <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
            <h2 className='text-4xl font text-accent pt-4 pb-2 text-left pl-2'><i> Welcome to your Dashboard  </i></h2>
            <Outlet></Outlet>
        </div>
        <div className="drawer-side">
            <label for="dashboard-sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 overflow-y-auto w-48 bg-purple-200 text-base-content">
                <li><Link to="/dashboard">My Profile</Link></li>
                { !admin && <>
              
                <li><Link to="/dashboard/addreview">Add a Review</Link></li>
                <li><Link to="/dashboard/myorders">My Orders</Link></li>
                </>}
               
               { admin && <>
                <li><Link to="/dashboard/makeadmin">Make Admin</Link></li>
                <li><Link to="/dashboard/addproduct">Add Products</Link></li>
                <li><Link to="/dashboard/manageproducts">Manage Products</Link></li>
                <li><Link to="/dashboard/manageorders">Manage All Orders</Link></li>
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