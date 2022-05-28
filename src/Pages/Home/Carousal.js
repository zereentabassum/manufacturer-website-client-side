import React from 'react';
import { FcApproval } from "react-icons/fc";


const Carousal = () => {
    return (
        <div className='bg-gradient-to-r from-purple-100 to-purple-300 my-24 py-14'>
            <div className="hero min-h-fit bg-purple-400 py-9">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Why we are good in this field?</h1> 
            <div className='text-left pl-7'>
            <h3 className='text-2xl py-2 flex'><span className='pr-3'><FcApproval/></span>  Advance Technologies</h3>
            <h3 className='text-2xl py-2 flex'><span className='pr-3'><FcApproval/></span>  Quick Works</h3>
            <h3 className='text-2xl py-2 flex'><span className='pr-3'><FcApproval/></span>  Fast Delivery</h3>
            <h3 className='text-2xl py-2 flex'><span className='pr-3'><FcApproval/></span>  Experience in this</h3>
            </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Carousal;


