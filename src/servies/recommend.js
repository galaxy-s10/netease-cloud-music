import request from './request';

export function getTopBanners() {
    return request({
        url: '/banner'
    })
}
export function getHotRecommend(limit) {
    return request({
        url: '/personalized',
        params: {
            limit
        }
    })
}
export function getAlbum(limit) {
    return request({
        url: '/top/album',
        params: {
            limit
        }
    })
}
export function getRanking(idx) {
    return request({
        url: '/top/list',
        params: {
            idx
        }
    })
}