import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import RecommendHeader from "@/components/recommendHeader";
import RankingCover from "@/components/rankingCover";
import {
  getRankingAction,
  getRankingToplist,
} from "../../store/actionCreators";

import { RankingWrapper } from "./style";

export default memo(function Ranking() {
  const { upRanking, newRanking, originRanking, rankingToplist } = useSelector(
    (state) => {
      return {
        upRanking: state.getIn(["recommend", "upRanking"]),
        newRanking: state.getIn(["recommend", "newRanking"]),
        originRanking: state.getIn(["recommend", "originRanking"]),
        rankingToplist: state.getIn(["recommend", "rankingToplist"]),
      };
    },
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRankingToplist());
  }, [dispatch]);
  useEffect(() => {
    if (!rankingToplist) return;
    dispatch(getRankingAction(0, rankingToplist));
    dispatch(getRankingAction(2, rankingToplist));
    dispatch(getRankingAction(3, rankingToplist));
  }, [rankingToplist]);

  return (
    <RankingWrapper>
      <RecommendHeader title="榜单"></RecommendHeader>
      <div className="tops">
        <RankingCover info={upRanking}></RankingCover>
        <RankingCover info={newRanking}></RankingCover>
        <RankingCover info={originRanking}></RankingCover>
      </div>
    </RankingWrapper>
  );
});
