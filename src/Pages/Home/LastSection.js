import React from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';


const LastSection = () => {
    return (
        <div>
            {/* <h1 className='text-4xl font-semibold'>Contact</h1> */}
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                <img className='w-2/5' src="https://thumbs.dreamstime.com/b/processor-motherboard-neon-light-computer-parts-close-up-photo-176843051.jpg" />

                <div className='w-2/3'>
                <h1 class="text-5xl font-bold ">Contact us</h1>
                <p class="py-6">Find us and keep contact us here in these platforms</p>
                <br />
                <div className='flex'>
                    <AiFillFacebook size={60} color='blue'/>
                    <BsTwitter size={60} color='cyan'/>
                    <AiFillLinkedin size={60} color='blue'/>
                </div>
               
              
                </div>
                </div>
            </div>
        </div>
    );
};

export default LastSection;