import axios from 'axios';

export const FETCH_JOKE_REQUEST = 'FETCH_JOKE_REQUEST';
export const FETCH_JOKE_SUCCESS = 'FETCH_JOKE_SUCCESS';
export const FETCH_JOKE_FAILURE = 'FETCH_JOKE_FAILURE';

export const fetchJoke = () => {
  return (dispatch) => {
    dispatch(fetchJokeRequest());
    axios
      .get('https://api.chucknorris.io/jokes/random')
      .then((response) => {
        const joke = response.data;
        dispatch(fetchJokeSuccess(joke));
      })
      .catch((error) => {
        dispatch(fetchJokeFailure(error.message));
      });
  };
};

export const fetchJokeRequest = () => {
  return {
    type: FETCH_JOKE_REQUEST,
  };
};

export const fetchJokeSuccess = (joke) => {
  return {
    type: FETCH_JOKE_SUCCESS,
    payload: joke,
  };
};

export const fetchJokeFailure = (error) => {
  return {
    type: FETCH_JOKE_FAILURE,
    payload: error,
  };
};