import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.config';
import { signOut } from 'firebase/auth';


const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut=()=>{
      signOut(auth);
    }

    const menuItems = <>
            <li><Link className='text-xl font-semibold px-6' to='/home'>Home</Link></li>
        <li><Link className='text-xl font-semibold px-6' to='/blogs'>Blogs</Link></li>
        <li><Link className='text-xl font-semibold px-6' to='/myprofile'>My Profile</Link></li>
        {
          user?<button onClick={handleSignOut} className='btn btn-secondary px-6'>Sign out</button>
        :
        <li><Link className='text-xl font-semibold px-6' to='/login'>Login</Link></li>
        }
        <li><Link className='text-xl font-semibold px-6' to='/signup'>Sign up</Link></li>
        <li><Link className='text-xl font-semibold px-6' to='/myportfolio'>My Porfolio</Link></li>
       
    </>
    return (
        
        <div>
        <div className="navbar bg-neutral">
 <div className="navbar-start">
   <div className="dropdown">
     <label tabIndex="0" className="btn btn-ghost lg:hidden">
       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
     </label>
     <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
         {menuItems}
     </ul>
   </div>
 </div>
 <div className="navbar-center hidden lg:flex">
   <ul className="menu menu-horizontal p-0 pr-8">
   {menuItems}
   </ul>
 </div>

</div>
       </div>
    );
};

export default Header;