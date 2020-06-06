import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }
  
  onSubmit = (event) => {
    event.preventDefault()
    const qURL = URL + this.state.searchText
    console.log(qURL)
    fetch(qURL)
    .then(resp => resp.json())
    .then(reviews => {
      this.setState({
        reviews: reviews.results
      })
    })
  }
  
  onChangeText = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form className="seach-form" onSubmit={this.onSubmit}>
          <input type="text"
            onChange={this.onChangeText}
          />
          <button type="submit">
            Search Movie
          </button>
        </form>
        <h3>Your Movie Reviews</h3>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }


} 
export default SearchableMovieReviewsContainer
