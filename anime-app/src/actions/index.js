import axios from 'axios';

// action types
export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

// action creator
export const fetchFacts = () => dispatch => {
  // action objects
  dispatch({ type: START_FETCHING });
  // do some async action and dispatch an error or success action
  axios
    .get(
      'https://cdn.animenewsnetwork.com/encyclopedia/api.xml?anime=4658&manga=4199&manga=11608'
    )
    console.log
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};