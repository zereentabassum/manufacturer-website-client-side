import React, { useEffect, useState } from 'react';
import Part from './Part';
import './Parts.css';

const Parts = () => {
    const [parts, setParts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/parts')
        .then(res=> res.json())
        .then(data=> setParts(data));
    } ,[])
    return (
        <div className='pt-28 parts bg-gradient-to-r from-purple-100 to-neutral pb-10'>
            <h1 className='text-5xl font-mono pb-7'>Computer Parts</h1>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-10 mx-8'>
            {
                  
                    parts.map(part=> <Part key={part._id} part={part}></Part>)
              
            }
            </div>
        </div>
    );
};

export default Parts;