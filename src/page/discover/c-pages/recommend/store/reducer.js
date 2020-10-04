import { Map } from "immutable";
import hotRecommend from "../c-page/hotRecommend";

const defaultState = Map({
    topBanners: [],
    hotRecommend,
})

function reducer(state = defaultState, action) {
    switch (action.type) {
        case "changeTopBanners":
            // return { ...state, topBanners: action.topBanners }
            return state.set("topBanners", action.topBanners)
        case "changeHotRecommend":
            console.log(action)
            return state.set("hotRecommend", action.hotRecommend)
        default:
            return state;
    }
}

export default reducer