import React from 'react'

const MovieReviews = ({reviews}) => {
  // console.log(reviews)
  return (
    <div className='review-list'>
      {reviews.map(review => {
        return <div className='review' key={review.headline}>
          <h3>{review.headline}</h3>
          <a href={review.link.url}> {review.headline}</a>
        </div>
      })}
    </div>
  )

};


export default MovieReviews

