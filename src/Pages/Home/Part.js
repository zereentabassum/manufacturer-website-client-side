import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Part.css';

const Part = ({ part }) => {
    const {_id, name, img, price, body, minQuantity, availableQuantity} = part;

    const navigate = useNavigate();
    const navigateToPurchase = () =>{
        navigate(`/parts/${_id}`)
    }

    return (
        <div>
            <div class="card w-96 bg-purple-300 hover:bg-white hover:border-4 shadow-xl hover:border-purple-300">
            <figure class="px-10 pt-10 part-img">
                <img className='' src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-left font-semibold ">
                <div className='text-justify'>
                <h2 className='card-title text-2xl'>{name}</h2>
                <h6>{body}</h6>
                <h5> <span className='text-gray-500'> Price:</span>  ${price}</h5>
                <h6><span className='text-gray-500'>Minimum Order Quantity:</span> {minQuantity} </h6>
                <h6><span className='text-gray-500'>Available Quantity:</span> {availableQuantity} </h6>
                </div>
                <div class="card-actions">
                <button onClick={navigateToPurchase}  class="btn bg-gradient-to-r from-accent to-primary text-white px-9 ">Purchase</button>

                </div>
            </div>
            </div>
        </div>
    );
};

export default Part;