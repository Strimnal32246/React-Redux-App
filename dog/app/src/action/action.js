import axios from "axios";

// action types
export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const fetchDog = () => dispatch => {
  // action objects
  dispatch({ type: START_FETCHING });
  // do some async action and dispatch an error or success action
  axios
    .get("https://dog.ceo/api/breeds/list/all")
    .then(res => console.log(res))
    .catch(err => console.log(err.response));
};
