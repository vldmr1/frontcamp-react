import React, { Component } from 'react';
import movies from '../tempdata';
import {
  Footer,
  Header,
  Search
} from './components/UI';
import MoviesList from './components/MoviesList/MoviesList';
import ControlBar from './components/ControlBar/ControlBar';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    movies: [],
    searchBy: 'title',
    sortBy: 'year',
    searchQuery: '',
  };

  fetchMovies = (searchQuery) => {
    const { searchBy } = this.state;
    return movies.filter(movie => {
      if (typeof movie[searchBy] === 'string') {
        return movie[searchBy]
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      }

      return movie[searchBy].some(
        genre => genre
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      )
    });
  };

  onSearchQueryChange = (event) => {
    event.preventDefault();
    const searchQuery = new FormData(event.target).get('search');
    const fetchedMovies = this.fetchMovies(searchQuery);
    this.setState({...this.state, searchQuery, movies: fetchedMovies});
  };

  onSortToggleHandler = (event) => {
    const sortBy = event.target.value.toLowerCase()
    this.setState({...this.state, sortBy});
  }

  onSearchTypeChange = (event) => {
    const searchBy = event.target.value.toLowerCase()
    this.setState({...this.state, searchBy});
  }

  render() {
    return (
      <div className="central-wrapper">
        <Header />
        <main className="main">
          <Search
            onSearch={this.onSearchQueryChange}
            onSearchTypeChange={this.onSearchTypeChange}
          />
          <ControlBar
            toggleSorting={this.onSortToggleHandler}
            filmsCount={this.state.movies.length}
          />
          <MoviesList
            sortBy={this.state.sortBy}
            movies={this.state.movies}
          />
        </main>
        <Footer />
      </div>
    );
  };
}

export default App;