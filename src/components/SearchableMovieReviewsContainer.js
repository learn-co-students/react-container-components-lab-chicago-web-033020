import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export class SearchableMovieReviewsContainer extends Component {
  
  state = {
    reviews: [], // fatal flaw, I had searchTerm as and array and reviews as an empty string
    searchTerm: ''
  }

  componentDidMount() {
    fetch(`${URL}&query=${this.state.searchQuery}`)
      .then(resp => resp.json())
      .then(reviews => {
        
        this.setState({
            reviews: reviews.results
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

        this.setState({
            reviews: reviews.results
        })
      })
  }

  render() {

    // console.log(this.state)
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

