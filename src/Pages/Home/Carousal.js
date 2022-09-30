import React from 'react';
import { GiCheckMark } from "react-icons/gi";


const Carousal = () => {
    return (

      <div class=" min-h-fit bg-white">
  <div class="hero-content flex-col lg:flex-row ">
    <img src="https:img.freepik.com/free-photo/manager-supervisor-industrial-worker-uniform-walking-large-metal-factory-hall-talking-about-increasing-production_342744-114.jpg?w=740&t=st=1661669602~exp=1661670202~hmac=3de06f15fa65d44dc83de63c28b569f65194dcff5eb9c5003151af03b74ad76f" class="max-w-sm rounded-lg shadow-2xl" alt='manufacture-company'/>
    <div className='ml-0 lg:ml-7'>
       <h3 className='text-2xl py-2 flex text-accent'><span  className='pr-3'><GiCheckMark className='text-primary'/></span>  Advance Technologies</h3>
       <h3 className='text-2xl py-2 flex text-accent'><span  className='pr-3'><GiCheckMark className='text-primary'/></span>  Quick Works</h3>
       <h3 className='text-2xl py-2 flex text-accent'><span  className='pr-3'><GiCheckMark className='text-primary'/></span>  Fast Delivery</h3>
       <h3 className='text-2xl py-2 flex text-accent'><span  className='pr-3'><GiCheckMark className='text-primary'/></span>  Experienced</h3>
    </div>
  </div>
</div>

    );
};

export default Carousal;



     