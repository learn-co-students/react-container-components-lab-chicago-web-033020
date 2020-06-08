// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({ reviews }) => {
    return (
        <div className='review-list'>
            {reviews.map(review => {
                return (
                    <div key={review.id} className='review'>
                        <p>Review Title: {review.headline}</p>
                        <p>Movie: {review.display_title}</p>
                        <a href={review.link.url}>{review.link.url}</a>
                    </div>
                )
            })}
        </div>
    )
}

export default MovieReviews