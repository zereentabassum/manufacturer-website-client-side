import React from 'react';
import { IoIosPeople } from "react-icons/io";
import { RiComputerLine } from "react-icons/ri";
import { MdRateReview } from "react-icons/md";
import { FcSurvey } from "react-icons/fc";

const BusinessSummery = () => {
    return (
        <div className='py-24 mt-10'>
            <h1 className='text-5xl pt-12 pb-9 font-semibold text-primary'>Business Summery</h1>
            <h2 className='text-3xl font-serif pb-5 text-purple-500'>We Have Served</h2>
            
            {/* we served 100+ customers, 120M+ Annual revenue, 33K+ Reviews, 50+ tools,  */}

            <div className="stats stats-vertical lg:stats-horizontal shadow bg-violet-100">
  
                <div className="stat w-60 h-52 ">

                    <div className='pl-14'>< IoIosPeople size={52} color="purple"/></div>
                    <div className="stat-value "><h2 className='text-5xl font-semibold text-accent'>100+</h2></div>
                    <div className="stat-title text-2xl text-purple-800"><h3>Customers</h3></div>
                </div>
                
                <div className="stat w-60 h-52">
                <div className='pl-14'>< FcSurvey size={52} color="purple"/></div>

                    <div className="stat-value"><h2 className='text-5xl font-semibold text-accent'>80M+</h2></div>
                    <div className="stat-title text-2xl text-purple-800"><h3>Annual revenue</h3> </div>
                </div>
                
                <div className="stat w-60 h-52">
                <div className='pl-14'>< MdRateReview size={52}/></div>

                    <div className="stat-value"><h2 className='text-5xl font-semibold text-accent'>12k+</h2></div>
                    <div className="stat-title text-2xl text-purple-800"><h3> Reviews</h3></div>
                </div>
                <div className="stat w-60 h-52">
                <div className='pl-14'>< RiComputerLine size={52}/></div>

                    <div className="stat-value"><h2 className='text-5xl font-semibold text-accent'>20+</h2></div>
                    <div className="stat-title text-2xl text-purple-800"><h3> Parts</h3></div>
                </div>
                
                </div>
        </div>
    );
};

export default BusinessSummery;