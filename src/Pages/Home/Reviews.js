import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);


    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=> res.json())
        .then(data=> setReviews(data));
    } ,[])

    return (
        <div className='my-28'>
            {/* <h1 className='text-4xl font-semibold'>Reviews</h1> */}
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  gap-7'>
                {
                       reviews.map(review=> <Review key={review._id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;