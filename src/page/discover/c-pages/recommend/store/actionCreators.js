import {
    getTopBanners,
    getHotRecommend,
    getAlbum,
    getRanking
} from "@/servies/recommend";

export const changeBannerAction = (res) => ({
    type: 'changeTopBanners',
    topBanners: res.banners
})
export const changeHotRecommendAction = (res) => ({
    type: 'changeHotRecommend',
    hotRecommend: res
})
export const changeAlbumAction = (res) => ({
    type: 'changeAlbum',
    album: res
})
export const changeUpRankingAction = (res) => ({
    type: 'changeUpRanking',
    upRanking: res
})
export const changeNewRankingAction = (res) => ({
    type: 'changeNewRanking',
    newRanking: res
})
export const changeOriginRankingAction = (res) => ({
    type: 'changeOriginRanking',
    originRanking: res
})
export const getTopBannerAction = () => {
    return dispatch => {
        getTopBanners().then(res => {
            dispatch(changeBannerAction(res))
        })
    }
}
export const getHotRecommendAction = (limit) => {
    return dispatch => {
        getHotRecommend(limit).then(res => {
            dispatch(changeHotRecommendAction(res.result))
        })
    }
}
export const getAlbumAction = (limit) => {
    return dispatch => {
        getAlbum(limit).then(res => {
            dispatch(changeAlbumAction(res.albums))
        })
    }
}
export const getRankingAction = (idx) => {
    return dispatch => {
        // 0:飙升 2:新歌 3:原创
        getRanking(idx).then(res => {
            switch (idx) {
                case 0:
                    dispatch(changeUpRankingAction(res.playlist))
                    break;
                case 2:
                    dispatch(changeNewRankingAction(res.playlist))
                    break;
                case 3:
                    dispatch(changeOriginRankingAction(res.playlist))
                    break;
                default:
            }
        })
    }
}