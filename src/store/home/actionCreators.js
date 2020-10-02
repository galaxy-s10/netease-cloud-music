import axios from 'axios'

export const changeBanner = banner => ({
  type: 'CHANGE_BANNER',
  banner
});

export const changeRecommend = recommend => ({
  type: 'CHANGE_RECOMMEND',
  recommend
});

// redux-thunk
export const getHomeMultidata = dispatch => {
  axios({
    url: 'http://123.207.32.32:8000/home/multidata'
  }).then(res => {
    dispatch(changeBanner(res.data.data.banner.list))
    dispatch(changeRecommend(res.data.data.recommend.list))
  })
}

// redux-saga
export const fetchHomeMultidata = {
  type: 'fetchHomeMultidata'
}

