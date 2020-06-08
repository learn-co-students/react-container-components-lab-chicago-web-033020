// Code LatestMovieReviewsContainer Here
import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export class LatestMovieReviewsContainer extends Component {

    constructor() {
        super() 
        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        fetch(URL)
            .then(resp => resp.json())
            .then(reviews => {
                let latestReviews = reviews.results
                this.setState({
                    reviews: latestReviews
                })
            })
    }

    render() {
        return (
            <div className='latest-movie-reviews'>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default LatestMovieReviewsContainer

