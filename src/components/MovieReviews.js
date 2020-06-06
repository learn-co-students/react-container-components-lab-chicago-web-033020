// Code MovieReviews Here
import React from 'react'
const MovieReviews = props => {
  return (
    
    <div className='review-list'>
      {props.reviews.map(review => {
        return <div className='review'>
          <h3>{review.headline}</h3>
          <a href={review.link.url}> {review.headline}</a>
        </div>
      })}
    </div>
  )

}

MovieReviews.defaultProps = {
  reviews: []
};
export default MovieReviews