import {
  FETCH_FINALFANTASY_LOADING,
  FETCH_FINALFANTASY_SUCCESS,
  FETCH_FINALFANTASY_FAILED
} from "../actions";

const initialState = {
  finalfantasy: [],
  error: null,
  isFetching: false
};

function reducer(state = initialState, action) {
  console.log("reducer", action);
  switch (action.type) {
    case FETCH_FINALFANTASY_LOADING:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case FETCH_FINALFANTASY_SUCCESS:
      return {
        ...state,
        pokemon: action.payload,
        isFetching: false,
        error: null
      };
    case FETCH_FINALFANTASY_FAILED:
      return {
        ...state,
        finalfantasy: [],
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
}

export default reducer;
