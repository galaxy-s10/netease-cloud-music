import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";


import { getHotRecommendAction } from '../../store/actionCreators';
import {
    HotRecommendWrapper
} from './style'
import RecommendHeader from '@/components/recommendHeader'

export default memo(function HotRecommend() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getHotRecommendAction())
    }, [])
    useSelector(state => {
        console.log(state.get("recommend").get("hotRecommend"))
    })

    return (
        <HotRecommendWrapper>
            <RecommendHeader title="热门推荐" keywords={["华语", "流行", "摇滚", "民谣", "电子"]}></RecommendHeader>

        </HotRecommendWrapper>
    )
})
