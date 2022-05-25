import React,  { useEffect, useState }  from 'react';
import { useParams } from 'react-router-dom';


const Purchase = () => {
    const {_id} = useParams();
    const [part, setPart] = useState([]);


    useEffect(()=>{
        fetch(`http://localhost:5000/parts/${_id}`)
        .then(res=> res.json())
        .then(data=> setPart(data));
    } ,[])

    const {name, img, price, body, minQuantity, availableQuantity} = part;
    return (
        <div className=''>
           <div class="hero min-h-screen bg-base-200">
              
                <div class="hero-content flex-col lg:flex-row pb-5">
                    <div>
                    <h1 className='text-3xl font-semibold pb-3'>Purchase {name}</h1>

                <img className='w-96 lg:mx-10' src={img} alt="" />
                </div>
                <div className='text-justify  lg:ml-14 ml-6'>                   
                <h1 class="text-5xl font-bold pb-3">{name}</h1>
                <div className='text-xl  w-3/5'>
                <h5 class="">{body}</h5>
                <h5 class=""><span className='text-gray-500'>Price:</span>  {price}</h5>
                <h5 class=""><span className='text-gray-500'>Available Quantity:</span>   {availableQuantity}</h5>
                <h5 class=""><span className='text-gray-500'>Minimum Order Quantity:</span>  {minQuantity}</h5>
                </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;