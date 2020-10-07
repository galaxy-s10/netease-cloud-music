// import { combineReducers } from "redux";
import { combineReducers } from "redux-immutable";

import { reducer as recommendReducer } from "../page/discover/c-pages/recommend/store";
import { reducer as playerReducer } from "../page/player/store";

const Reducer = combineReducers({
    recommend: recommendReducer,
    player: playerReducer
})

export default Reducer