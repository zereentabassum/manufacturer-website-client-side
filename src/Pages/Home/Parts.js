import React, { useEffect, useState } from 'react';
import useParts from '../Shared/useParts';
import Part from './Part';
import './Parts.css';

const Parts = () => {
  
    const [parts, setParts] = useParts();

    return (
        <div className='py-16 parts bg-slate-100 '>
            <h1 className='text-5xl text-primary font-semibold pb-10'>Computer Parts</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  justify-items-center '>
            {
                  
                    parts.map(part=> <Part key={part._id} part={part}></Part>)
              
            }
            </div>
        </div>
    );
};

export default Parts;