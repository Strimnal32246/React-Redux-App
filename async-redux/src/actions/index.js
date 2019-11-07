export const FETCH_FINALFANTASY_LOADING = "FETCH_FINALFANTASY_LOADING";
export const FETCH_FINALFANTASY_SUCCESS = "FETCH_FINALFANTASY_SUCCESS";
export const FETCH_FINALFANTASY_FAILED = "FETCH_FINALFANTASY_FAILED";

export const finalfantasyLoading = () => ({ type: FETCH_FINALFANTASY_LOADING });
export const finalfantasyLoadSuccess = data => ({
  type: FETCH_FINALFANTASY_SUCCESS,
  payload: data
});
export const finalfantasyLoadFailure = error => ({
  type: FETCH_FINALFANTASY_FAILED,
  payload: error
});

export function fetchFinalfantasy() {
  return function(dispatch) {
    dispatch(finalfantasyLoading());

    return fetch(`https://xivapi.com/character/730968?data=AC,FR,FC,FCM,PVP`)
      .then(response => response.json())(console.log(fetchFinalfantasy))
      .then(json => dispatch(finalfantasyLoadSuccess(json.results)))
      .catch(error => dispatch(finalfantasyLoadFailure(error)));
  };
}
export default fetchFinalfantasy;
