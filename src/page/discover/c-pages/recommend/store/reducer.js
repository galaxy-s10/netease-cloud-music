import { Map } from "immutable";

const defaultState = Map({
  topBanners: [],
  hotRecommend: [],
  newAlbum: [],
  upRanking: [],
  newRanking: [],
  originRanking: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case "changeTopBanners":
      // return { ...state, topBanners: action.topBanners }
      return state.set("topBanners", action.topBanners);
    case "changeHotRecommend":
      return state.set("hotRecommend", action.hotRecommend);
    case "changeAlbum":
      return state.set("newAlbum", action.album);
    case "changeUpRanking":
      return state.set("upRanking", action.upRanking);
    case "changeNewRanking":
      return state.set("newRanking", action.newRanking);
    case "changeOriginRanking":
      return state.set("originRanking", action.originRanking);
    case "changeRankingToplist":
      return state.set("rankingToplist", action.rankingToplist);
    default:
      return state;
  }
}

export default reducer;
