import React from 'react';

const NotFound = () => {
    return (
        <div className='flex justify-evenly'>
            <div className='pt-24 ml-5'>
            <h1 className='lg:text-8xl text-6xl'>404</h1>
            <h2 className='lg:text-4xl text-2xl'>Page Not Found</h2>
            </div>
            <div>
            <img className='lg:h-screen lg:w-full w-4/5 ' src="https://img.freepik.com/free-vector/404-error-abstract-concept-illustration_335657-2243.jpg?t=st=1653219580~exp=1653220180~hmac=2126d23328767588297e9f6e73569df897e06cf6d768db9df463c626062e8e1a&w=740" alt="" />
            </div>
        </div>
    );
};

export default NotFound;