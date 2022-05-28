import React from 'react';
import { useForm } from 'react-hook-form';

const AddReview = () => {
   
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch(`https://vast-savannah-90121.herokuapp.com/reviews`, {
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
        <div>
            <h1 className='text-3xl py-3 mb-8'>Add a Review</h1>
          
   <form className='' onSubmit={handleSubmit(onSubmit)}>
          
            <label className='font-semibold text-blue-500'>Put a number among 1 to 5 to give a rating :</label>
            <br />
             <input className='mb-5 input input-bordered input-primary w-full max-w-xs my-2 text-lg' placeholder='Put a rating among 1-5' type="text" {...register("rating")} />
           <br />
         
           <label className='font-semibold '>Write a review :</label>
            <br />
           <textarea className='mb-2 input input-bordered input-primary w-full max-w-xs my-2 text-lg' placeholder='Write your review' {...register("body")} />
           <br />
        
           <input className='btn btn-primary mt-1' type="submit" />
           <br />
          
        </form>

        </div>
    );
};

export default AddReview;