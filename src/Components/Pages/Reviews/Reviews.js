import React from 'react';
import './Reviews.css'

const Reviews = ({ review }) => {
    const { name, photo, time, message } = review;
    console.log(review)
    return (
        <div className='container review-container'>
            <div className='user-info'>
                <img className='rounded ' src={photo} alt="" />
            </div>
            <div className='comment-container'>
                <div className='user'>
                    <p>{name}</p>
                    <p>{time}</p>
                </div>
                <hr />
                <p>{message} </p>
            </div>

        </div>
    );
};

export default Reviews;