import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
} from '../actionTypes';

const initialState = {
  movies: [],
  fetchingMovies: false,
  error: '',
}

export const reducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case FETCH_MOVIES_REQUEST:
      return {
        ...state,
        fetchingMovies: true,
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        fetchingMovies: false,
        movies: payload,
      };
    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        fetchingMovies: false,
        error: payload,
      }
    default:
      return state;
  };
};