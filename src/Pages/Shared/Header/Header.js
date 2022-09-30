import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.config';
import { signOut } from 'firebase/auth';
import {BiUserCircle} from 'react-icons/bi';


const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut=()=>{
      signOut(auth);
      localStorage.removeItem('accessToken');
    }

    const menuItems = <>
    {/* {
      user && 
     <div className="flex  bg-slate-100 rounded-3xl h-10 pr-1">
        <h2 className='font-semibold text-accent text-xl text-left flex items-center'><BiUserCircle className='pr-1 text-accent' size={38}/>  {user.displayName}</h2>
     </div>
     
     
    } */}
            <li><Link className='text-xl font-semibold  text-purple-800' to='/home'>Home</Link></li>
        <li><Link className='text-xl font-semibold  text-purple-800' to='/blogs'>Blogs</Link></li>
        {
          user?<button onClick={handleSignOut} className='btn btn-secondary  font-semibold bg-purple-200'>Sign out</button>
        :
        <li><Link className='text-xl font-semibold  text-purple-800' to='/login'>Login</Link></li>
        }
        
        <li><Link className='text-xl font-semibold  text-purple-800' to='/signup'>Sign up</Link></li>
        {user &&
        <li><Link className='text-xl font-semibold  text-purple-800' to='/dashboard'>Dashboard</Link></li>
        }
        <li><Link className='text-xl font-semibold  text-purple-800' to='/myportfolio'>My Porfolio</Link></li>
       
    </>
    return (
        
        <div className='sticky top-0 z-50'>
        <div className="navbar  bg-gradient-to-r from-primary to-neutral ">
 <div className="navbar-start">
   <div className="dropdown">
     <label tabIndex="0" className="btn btn-ghost lg:hidden">
       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
     </label>
     <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
         {menuItems}
     </ul>
   </div>
   {
      user && 
     <div className="flex  bg-slate-100 rounded-3xl h-10 pr-1">
        <h2 className='font-semibold text-accent text-xl text-left flex items-center'><BiUserCircle className='pr-1 text-accent' size={38}/>  {user.displayName}</h2>
     </div>
     
     
    }
 </div>
 
 <div className="navbar-center hidden lg:flex ">
   <ul className="menu menu-horizontal p-0">
   {menuItems}
   </ul>
 </div>

      {user &&
 <div className="navbar-end">
                <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
      }
</div>

       </div>
    );
};

export default Header;