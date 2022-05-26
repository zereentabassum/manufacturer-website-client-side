import React,  { useEffect, useState }  from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.config';



const Purchase = () => {
    const [user] = useAuthState(auth);


    const {_id} = useParams();
    const [part, setPart] = useState([]);

   


    useEffect(()=>{
        fetch(`http://localhost:5000/parts/${_id}`)
        .then(res=> res.json())
        .then(data=> setPart(data));
    } ,[])

    const {name, img, price, body, minQuantity, availableQuantity} = part;

    // const [plus, setPlus] = useState(minQuantity);

    const  number = parseInt(minQuantity);
    const availableNumber = parseInt(availableQuantity);
    

    

    // const add = () =>{

    //    const number = plus + 1;
    //     setPlus(number);
    
    // }
   
    const handleOrder = event =>{
        event.preventDefault();
       
        // const quantity = event.target.quantity.value;
        // const address = event.target.address.value;
        // const phone = event.target.phone.value;

    
    const ordering = {
        orderId : _id,
        orderName : name,
        // quantity,
        // address,
        // phone,
        customer: user.displayName,
        customerEmail: user.email,
        phone: event.target.phone.value,
        quantity : event.target.quantity.value,
        address : event.target.address.value
    }

    console.log(ordering);

    fetch('http://localhost:5000/order', {
        method: 'POST',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(ordering)
    })
    .then(res => res.json())
    .then(data => {
            console.log(data);
           alert('Order booked')
    

    })
}
    


   
    return (
        <div className=''>
           

           <div class="hero min-h-screen bg-base-200">
              
                <div class="hero-content flex-col lg:flex-row pb-5">
                    <div>
                    <h1 className='text-2xl font-semibold text-purple-600'>Username: {user.displayName}</h1>
             <h1 className='text-2xl font-semibold pb-3 text-purple-600'>Email: {user.email}</h1> 
                    {/* <h1 className='text-3xl font-semibold pb-3'>Purchase {name}</h1> */}
                
                <img className='w-96 lg:mx-10' src={img} alt="" />
                </div>
                <div className='text-justify  lg:ml-14 ml-6'>          
               
                <h1 class="text-5xl font-bold pb-3">{name}</h1>
                <div className='text-xl  w-3/5'>
                <h5 class="">{body}</h5>
                <h5 class=""><span className='text-gray-500'>Price:</span>  ${price}</h5>
                <h5 class=""><span className='text-gray-500'>Available Quantity:</span>   {availableQuantity}</h5>
                <h5 class="text-3xl"><span className='text-gray-500 text-3xl'>Minimum Order Quantity:</span>  {minQuantity}</h5>
    
                </div>

               
                <div className='my-5 mx-auto'>
                <h3 className='text-3xl  font-semibold'>Put Quantity and other informations for order:</h3>
                {/* <h5 class="text-3xl"><span className='text-gray-500 pr-2'>Minimum Order Quantity:</span></h5> */}
               
                {/* <button className='btn btn-secondary text-2xl'>-</button>
                <h5 className='text-3xl text-accent font-bold mx-4'>{number}</h5>
                <button onClick={add} className='btn btn-secondary text-2xl'>+</button> */}
                <form onSubmit={handleOrder}>
                    <div  className='flex mt-6'>
                    <input className='border-2 border-purple-300 py-2 px-2' type="number" name="quantity" placeholder='Put quantity' id="" required/>
                <h3 className='text-xl pl-2 text-blue-500'>(Minimum order quantity is: {minQuantity} and maximum is: {availableQuantity})</h3>
                </div>
                <br />
                    <input className='border-2 border-purple-300 py-2 my-1 px-2' type="text" name="address" placeholder='Address' id="" required/>
                    <br />
                    {/* <input className='border-2 border-purple-300 py-2 my-1 px-2' type="email" name="email" placeholder='Email' id="" required/>
                    <br /> */}
                    
                    <input className='border-2 border-purple-300 py-2 my-1 px-2' type="number" name="phone" placeholder='Phone number' id="" required/>
                    <br />
               
                   
              
                <input className='btn btn-primary px-7 my-6 ml-4' type="submit" name='submit' value="Order" />
                {/* <button className='btn btn-primary px-7 my-6 ml-4'>Order</button> */}
                
                </form>
                </div>
               
                </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;