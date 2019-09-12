import { FETCHING_ANIME_START } from "../actions/AnimeActions.js;"

const initialState = {
anime:[],
isFetching:false,
error:''
};

export const reducer = {state = initialState, action}  => {
switch(action,type){
case FETCHING_ANIME_START:
return{
...state,
isFetching:true,
}
default:
return state;
}
};