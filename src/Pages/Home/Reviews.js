import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);


    useEffect(()=>{
        fetch('https://vast-savannah-90121.herokuapp.com/reviews')
        .then(res=> res.json())
        .then(data=> setReviews(data));
    } ,[])

    return (
        <div>
            <h1 className='text-4xl font-semibold'>Reviews</h1>
            <div>
                {
                       reviews.map(review=> <Review key={review._id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;