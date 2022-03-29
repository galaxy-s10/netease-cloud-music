import {
  getTopBanners,
  getHotRecommend,
  getAlbum,
  getRanking,
  getToplist,
} from "@/servies/recommend";

export const changeBannerAction = (res) => ({
  type: "changeTopBanners",
  topBanners: res.banners,
});
export const changeHotRecommendAction = (res) => ({
  type: "changeHotRecommend",
  hotRecommend: res,
});
export const changeAlbumAction = (res) => ({
  type: "changeAlbum",
  album: res,
});
export const changeUpRankingAction = (res) => ({
  type: "changeUpRanking",
  upRanking: res,
});
export const changeNewRankingAction = (res) => ({
  type: "changeNewRanking",
  newRanking: res,
});
export const changeOriginRankingAction = (res) => ({
  type: "changeOriginRanking",
  originRanking: res,
});
export const changeRankingToplistAction = (res) => ({
  type: "changeRankingToplist",
  rankingToplist: res,
});
export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      dispatch(changeBannerAction(res));
    });
  };
};
export const getHotRecommendAction = (limit) => {
  return (dispatch) => {
    getHotRecommend(limit).then((res) => {
      dispatch(changeHotRecommendAction(res.result));
    });
  };
};
export const getAlbumAction = (limit) => {
  return (dispatch) => {
    getAlbum(limit).then((res) => {
      dispatch(changeAlbumAction(res.albums));
    });
  };
};
export const getRankingAction = (idx, rankingToplist) => {
  console.log("getRankingAction", idx, rankingToplist);

  return async (dispatch) => {
    console.log(rankingToplist[idx].id, 33332);
    try {
      const playlist = await getRanking(rankingToplist[idx].id);
      console.log("playlistplaylist", playlist);
      // 0:飙升 2:新歌 3:原创
      switch (idx) {
        case 0:
          dispatch(changeUpRankingAction(playlist.playlist || []));
          break;
        case 2:
          dispatch(changeNewRankingAction(playlist.playlist || []));
          break;
        case 3:
          dispatch(changeOriginRankingAction(playlist.playlist || []));
          break;
        default:
      }
    } catch (error) {
      console.log("error", error);
    }
  };
};
export const getRankingToplist = () => {
  console.log("getRankingAction");

  return async (dispatch) => {
    try {
      const toplistRes = await getToplist();
      console.log(toplistRes, "0-00009");
      dispatch(changeRankingToplistAction(toplistRes.list));
    } catch (error) {
      console.log("getRankingToplist-error", error);
    }
  };
};

// export const getRankingAction = (idx) => {
//   console.log("getRankingAction", idx);
//   return (dispatch) => {
//     getToplist()
//       .then((toplistRes) => {
//         // 0:飙升 2:新歌 3:原创
//         getRanking(toplistRes.list[idx].id)
//           .then((res) => {
//             console.log(idx, res.playlist, 764);
//             switch (idx) {
//               case 0:
//                 dispatch(changeUpRankingAction(res.playlist || []));
//                 break;
//               case 2:
//                 dispatch(changeNewRankingAction(res.playlist || []));
//                 break;
//               case 3:
//                 dispatch(changeOriginRankingAction(res.playlist || []));
//                 break;
//               default:
//             }
//           })
//           .catch((err) => {
//             console.log("getRanking错误", err);
//           });
//       })
//       .catch((err) => {
//         console.log(err, "getToplist错误");
//       });
//   };
// };
