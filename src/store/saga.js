import { takeEvery, put, all } from "redux-saga/effects";
import axios from "axios";
import {
    changeRecommend,
    changeBanner
} from "./home/actionCreators";

function* fetchHomeMultidata(action) {
    const res = yield axios.get('http://123.207.32.32:8000/home/multidata')
    // yield put(changeBanner(res.data.data.banner.list))
    // yield put(changeRecommend(res.data.data.recommend.list))
    yield all([
        yield put(changeBanner(res.data.data.banner.list)),
        yield put(changeRecommend(res.data.data.recommend.list))
    ])
}

function* mySaga() {
    yield takeEvery('fetchHomeMultidata', fetchHomeMultidata)
}

export default mySaga;