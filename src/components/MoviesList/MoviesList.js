import React from 'react';
import MovieCard from './MovieCard/MovieCard';
import './MoviesList.scss';

const MoviesList = ({ movies, sortBy, selectMovie }) => {
  const movieCards = movies
    .sort((a, b) => {
      return a[sortBy] < b[sortBy] ? -1 : 1;
    })
    .map(movie => {
      const { id } = movie;
      return <MovieCard
        key={id}
        selectMovie={selectMovie}
        {...movie}/>
  });

  const noMovies = (
    <li className="no-movies">
      <h2>No films found</h2>
    </li>
  )

  return (
    <ul className="movies-list">
      {movieCards.length ? movieCards : noMovies}
    </ul>
  );
}

export default MoviesList;