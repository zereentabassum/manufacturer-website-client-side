import React from 'react';

const Review = ({review}) => {
    const {rating, body} = review;
    return (
        <div className='border border-2 bg-purple-200 p-6 text-left'>
            <h5 className='text-xl font-semibold'>Rating: {rating} Star</h5>
            <h5 className='text-base font-semibold'>{body}</h5>
        </div>
    );
};

export default Review;