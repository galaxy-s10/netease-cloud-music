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
export function getToplist() {
  return request({
    url: "/toplist",
  });
}

export function getRanking(id) {
  return request({
    url: "/playlist/detail",
    params: {
      id,
    },
  });
}
