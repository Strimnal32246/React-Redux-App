export const FETCHING_ANIME_START = "FETCHING_ANIME_START";
export const getAnime = () => {
  return dispatch => {
    dispatch({ type: FETCHING_ANIME_START });
  };
};
