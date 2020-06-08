// Code SearchableMovieReviewsContainer Here
import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export class SearchableMovieReviewsContainer extends Component {

    constructor() {
        super()

        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    componentDidMount() {
        fetch(`${URL}&query=${this.state.searchQuery}`)
            .then(resp => resp.json())
            .then(reviews => {
                let searchedReviews = reviews.results
                this.setState({
                    reviews: searchedReviews
                })
            })
    }

    onSearchQueryChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    onSearchSubmit = (event) => {
        event.preventDefault()
        
        fetch(`${URL}&query=${this.state.searchTerm}`)
            .then(resp => resp.json())
            .then(reviews => {
                let searchedReviews = reviews.results
                this.setState({
                    reviews: searchedReviews
                })
            })
    }

    render() {
        console.log(this.state)
        return (
            <div className='searchable-movie-reviews'>
                <form onSubmit={this.onSearchSubmit}>
                    <input onChange={this.onSearchQueryChange} value={this.state.searchTerm} placeholder='Search for Reviews...' />
                    <input type='submit' />
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer
