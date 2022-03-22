import request from "./request";

export function getTopBanners() {
  return request({
    url: "/banner",
  });
}
export function getHotRecommend(limit) {
  return request({
    url: "/personalized",
    params: {
      limit,
    },
  });
}
export function getAlbum(limit) {
  return request({
    url: "/album/new",
    params: {
      limit,
    },
  });
}
export function getRanking(id) {
  return request({
    url: "/top/playlist",
    params: {
      id,
    },
  });
}
