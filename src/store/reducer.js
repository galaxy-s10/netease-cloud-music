// import { combineReducers } from "redux";
import { combineReducers } from "redux-immutable";

import { reducer as recommendReducer } from "../page/discover/c-pages/recommend/store";

const Reducer = combineReducers({
    recommend: recommendReducer
})

export default Reducer