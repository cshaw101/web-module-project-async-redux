
import {
  FETCH_JOKE_REQUEST,
  FETCH_JOKE_SUCCESS,
  FETCH_JOKE_FAILURE,
} from '../actions/action';

const initialState = {
  joke: '',
  loading: false,
  error: null,
};

const jokesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOKE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_JOKE_SUCCESS:
      return {
        ...state,
        loading: false,
        joke: action.payload.value,
      };
    case FETCH_JOKE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default jokesReducer;
