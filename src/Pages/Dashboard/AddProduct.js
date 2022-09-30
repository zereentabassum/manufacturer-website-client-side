import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        // const url = `https://vast-savannah-90121.herokuapp.com/`
        fetch(`https://vast-savannah-90121.herokuapp.com/parts`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
        } )
        alert('Product Added')
        }
        

    return (
        <div className=''>
            <h1 className='text-3xl'>Add Product</h1>
        <form className='' onSubmit={handleSubmit(onSubmit)}>
           <input className='mb-2 input input-bordered input-primary w-full max-w-xs my-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
           <br />
           <input className='mb-2 input input-bordered input-primary w-full max-w-xs my-2' placeholder='Photo URL' type="text" {...register("img")} />
           <br />
           <textarea className='mb-2 input input-bordered input-primary w-full max-w-xs my-2' placeholder='Description' {...register("body")} />
           <br />
           <input className='mb-2 input input-bordered input-primary w-full max-w-xs my-2' placeholder='Minimum Quantity' type="text" {...register("minQuantity")} />
           <br />
           <input className='mb-2 input input-bordered input-primary w-full max-w-xs my-2' placeholder='Available Quantity' type="text" {...register("availableQuantity")} />
           <br />
           <input className='mb-2 input input-bordered input-primary w-full max-w-xs my-2' placeholder='Price' type="text" {...register("price")} />
           <br />
           <input className='btn btn-primary mt-1 text-white' type="submit" />
           <br />
          
        </form>
           </div>
    );
};

export default AddProduct;