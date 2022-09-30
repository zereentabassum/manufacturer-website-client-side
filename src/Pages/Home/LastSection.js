import React from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';


const LastSection = () => {
    return (
        <div className='mt-32 mb-28'>
            {/* <h1 className='text-4xl font-semibold'>Contact</h1> */}
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse lg:justify-evenly">
                <img className='w-2/5' src="https://img.freepik.com/free-vector/isometric-computer-parts-collection-with-monitor-video-card-drives-cable-wires-keyboard-mouse-system-unit-isolated_1284-38507.jpg?t=st=1656252856~exp=1656253456~hmac=1e80b346f03f798fb5aa0d3a671502ac3c98ba719ced70fc5616dccc8194e8a0&w=740"  alt='computer parts'/>

                <div className='lg:w-2/5 md:w-4/5 sm:w-2/3 text-justify'>
                <h1 className="text-5xl font-bold pb-3 text-accent">Contact us</h1>
                <h2 className='text-xl text-primary'>Contact Number: +1234567890</h2>
                <p className="py-6 text-xl">Find us and stay in touch with us in these platforms.
                If you need any service or help, you can call us on the given number. You can also message us in our social media platforms. We will be glad to help our customers.
                </p>
                <br />
                <div className='flex justify-left'>
                   <a href="https://www.facebook.com/"> <AiFillFacebook size={56} className='text-blue-600'/></a>
                  <a href="https://twitter.com/">  <BsTwitter size={56} color='cyan'/></a>
                   <a href="https://www.linkedin.com/"> <AiFillLinkedin size={56} className='text-blue-700'/></a>
                </div>
               
              
                </div>
                </div>
            </div>
        </div>
    );
};

export default LastSection;