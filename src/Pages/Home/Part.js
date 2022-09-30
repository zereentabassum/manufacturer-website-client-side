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
        
            <div className="card w-96 bg-purple-300 hover:bg-white border-2 border-purple-300 hover:border-2 shadow-xl hover:border-purple-300 mb-10">
            <figure className=" pt-10 part-img">
                <img src={img} alt="Shoes"  className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-left font-semibold ">
                <div className='text-justify'>
                <h2 className='card-title text-2xl'>{name}</h2>
                <h6>{body}</h6>
                <h5> <span className='text-gray-500'> Price:</span>  ${price}</h5>
                <h6><span className='text-gray-500'>Minimum Order Quantity:</span> {minQuantity} </h6>
                <h6><span className='text-gray-500'>Available Quantity:</span> {availableQuantity} </h6>
                </div>
                <div className="card-actions">
                <button onClick={navigateToPurchase}  className="btn bg-gradient-to-r from-accent to-primary text-white px-9 hover:filter hover:brightness-110 border-2 border-transparent hover:border-primary" >Purchase</button>

                </div>
            </div>
            </div>
        
    );
};

export default Part;