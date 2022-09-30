import React from 'react';
import useParts from '../Shared/useParts';

const ManageProducts = () => {
    const [parts, setParts] = useParts();

    // const handleDelete = (_id) =>{
    //     const proceed = window.confirm('Are you sure?');
    //     if(proceed){
    //         const url = `https://vast-savannah-90121.herokuapp.com/parts/${_id}`;
    //         console.log(url);
    //         fetch(url, {
    //             method: 'DELETE'
    //         })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             const remaining = parts.filter(part => part._id !== _id)
    //             setParts(remaining);
    //         })
    //     }
    // }      
    return (
        <div>
            <h1 className='text-4xl pb-3'>Manage Products</h1>
            {/* {
                parts.map(part=><div key={part._id}> */}
                <div className='flex justify-around '>
                    <div>
                    <h1 className='text-3xl pt-3 pb-6'>Your Products: {parts.length}</h1>
                    
                    {
                parts.map(part=><div key={part._id}>
                <div className='flex container'>
                    <div class="avatar">
                    <div class="w-24 rounded-xl">
                        <img src={part.img} alt='parts-img'/>
                    </div>
                    </div>
                    <div className='text-left  pr-28'>

                    <h6 className='text-2xl'><span className='text-primary'>Name: </span> {part.name}</h6>
                    <p><span className='text-primary'>Price:</span> ${part.price}</p>
                    <p><span className='text-primary'>Id:</span> {part._id}</p>
                  
                    </div>
                    <div className='text-right'>
                        <button
                        //  onClick={()=>handleDelete(part._id)} 
                         
                         className='btn bg-red-500 text-white'>Delete</button>
                    </div>
                </div>
                <hr />

                </div>)
            }

      
    
                </div>
               </div>
               </div>
    )

               
            
       
    
};

export default ManageProducts;