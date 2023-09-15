import axios from 'axios';

export const FETCH_JOKE = 'FETCH_JOKE';
export const FETCH_JOKE_START = 'FETCH_JOKE_START';
export const FETCH_JOKE_SUCCESS = 'FETCH_JOKE_SUCCESS'
export const FETCH_JOKE_FAIL = 'FETCH_JOKE_FAIL';

export const getJoke = () => dispatch => {
  dispatch({ type: FETCH_JOKE_START });
  axios
    .get('https://api.api-ninjas.com/v1/jokes?limit=1')
    .then(res => console.log(res))
    .catch(err => console.log(err))
}



//'https://api.api-ninjas.com/v1/jokes?limit=1'