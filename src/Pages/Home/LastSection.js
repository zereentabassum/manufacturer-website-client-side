import React from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';


const LastSection = () => {
    return (
        <div className='bg-gradient-to-r from-purple-100 to-purple-300 mt-14 mb-28'>
            {/* <h1 className='text-4xl font-semibold'>Contact</h1> */}
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                <img className='w-2/5' src="https://thumbs.dreamstime.com/b/processor-motherboard-neon-light-computer-parts-close-up-photo-176843051.jpg" />

                <div className='w-2/3'>
                <h1 className="text-5xl font-bold pb-3 ">Contact us</h1>
                <h2 className='text-xl'>Contact Number: +1234567890</h2>
                <p className="py-6 text-xl">Find us and keep contact us here in these platforms</p>
                <br />
                <div className='flex justify-center'>
                    <AiFillFacebook size={72} color='blue'/>
                    <BsTwitter size={72} color='cyan'/>
                    <AiFillLinkedin size={72} color='blue'/>
                </div>
               
              
                </div>
                </div>
            </div>
        </div>
    );
};

export default LastSection;