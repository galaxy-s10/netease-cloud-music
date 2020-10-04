import { getTopBanners,getHotRecommend } from "@/servies/recommend";

export const changeBannerAction = (res) => ({
    type: 'changeTopBanners',
    topBanners: res.banners
})
export const changeHotRecommendAction = (res) => ({
    type: 'changeHotRecommend',
    hotRecommend: res
})
export const getTopBannerAction = () => {
    return dispatch => {
        getTopBanners().then(res => {
            console.log('resresres')
            console.log(res)
            dispatch(changeBannerAction(res))
        })
    }
}
export const getHotRecommendAction = () => {
    return dispatch => {
        getHotRecommend(8).then(res => {
            console.log(res)
            dispatch(changeHotRecommendAction(res.result))
        })
    }
}