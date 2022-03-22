import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getHotRecommendAction } from "../../store/actionCreators";
import { HotRecommendWrapper } from "./style";
import RecommendHeader from "@/components/recommendHeader";
import SongCover from "@/components/songCover";

function HotRecommend() {
  const dispatch = useDispatch();
  const { hotRecommends } = useSelector((state) => {
    return { hotRecommends: state.get("recommend").get("hotRecommend") };
  }, shallowEqual);
  useEffect(() => {
    dispatch(getHotRecommendAction(8));
  }, [dispatch]);
  return (
    <HotRecommendWrapper>
      <RecommendHeader
        title="热门推荐"
        keywords={["华语", "流行", "摇滚", "民谣", "电子"]}
      ></RecommendHeader>
      <div className="recommend-list">
        {hotRecommends.map((item, index) => {
          return <SongCover info={item} key={item.id}></SongCover>;
        })}
      </div>
    </HotRecommendWrapper>
  );
}

export default memo(HotRecommend);
