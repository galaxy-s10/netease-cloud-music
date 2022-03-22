import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import RecommendHeader from "@/components/recommendHeader";
import RankingCover from "@/components/rankingCover";
import { getRankingAction } from "../../store/actionCreators";

import { RankingWrapper } from "./style";

export default memo(function Ranking() {
  const { upRanking, newRanking, originRanking } = useSelector((state) => {
    return {
      upRanking: state.getIn(["recommend", "upRanking"]),
      newRanking: state.getIn(["recommend", "newRanking"]),
      originRanking: state.getIn(["recommend", "originRanking"]),
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRankingAction(0));
    dispatch(getRankingAction(2));
    dispatch(getRankingAction(3));
  }, [dispatch]);

  return (
    <RankingWrapper>
      <RecommendHeader title="榜单"></RecommendHeader>
      <div className="tops">
        {upRanking && <RankingCover info={upRanking}></RankingCover>}
        {newRanking && <RankingCover info={newRanking}></RankingCover>}
        {originRanking && <RankingCover info={originRanking}></RankingCover>}
      </div>
    </RankingWrapper>
  );
});
