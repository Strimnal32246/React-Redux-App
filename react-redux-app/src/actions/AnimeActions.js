import axios from "axios";

export const FETCHING_ANIME_START = "FETCHING_ANIME_START";
export const getAnime = () => {
  return dispatch => {
    dispatch({ type: FETCHING_ANIME_START });
  };
};

axios
  .get(
    "https://cdn.animenewsnetwork.com/encyclopedia/api.xml?anime=4658&manga=4199&manga=11608"
  )
  .then(res => console.log(res))
  .catch(err => console.log(err.response));
