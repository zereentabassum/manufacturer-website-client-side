import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.config';

const AddReview = () => {
    const [user] = useAuthState(auth);

    const handleReview = (event) =>{
        event.preventDefault();
        const Review ={
        rating : event.target.rating.value,
        review : event.target.review.value,
        username : user.displayName,
    }
    console.log(Review);
    const url = "http://localhost:5000/reviews";
    fetch(url, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(Review),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
           alert("Review Added");
           
        });
        // .catch((error) => {
        //     toast.error(error);
        // });
    
    }
   
   return(
    <div className=''>
        <h1 className='text-3xl mb-6'>Give your Review</h1>
        <form onSubmit={handleReview}>
            <h3 className=' text-xl pb-2 font-semibold text-accent'>Please give a rating:</h3>
        <div className="rating">
            <input type="radio" name="rating" class="mask mask-star-2 bg-yellow-400" value='1' required/>
            <input type="radio" name="rating" class="mask mask-star-2 bg-yellow-400" value='2' />
            <input type="radio" name="rating" class="mask mask-star-2 bg-yellow-400" value='3' />
            <input type="radio" name="rating" class="mask mask-star-2 bg-yellow-400" value='4' />
            <input type="radio" name="rating" class="mask mask-star-2 bg-yellow-400" value='5' />
            </div>
            <br/>

        <h3 className='mt-8 text-xl pb-2 font-semibold text-accent'>Please give your review:</h3>
        <textarea class="textarea textarea-primary w-60" placeholder="Write here" name='review' required></textarea>
        <br />
            <input type="submit" value="Submit" className='btn btn-primary mt-6 text-white'/>
        </form>
    </div>
   )
};

export default AddReview;