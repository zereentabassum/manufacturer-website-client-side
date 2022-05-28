import React from 'react';

const Review = ({review}) => {
    const {rating, body} = review;
    return (
        <div className='border border-2 bg-purple-200 p-6 text-left'>
            <h1 className='text-2xl font-semibold'>Rating: {rating} Star</h1>
            <h1 className='text-2xl font-semibold'>Review: {body}</h1>
        </div>
    );
};

export default Review;