import React, { memo } from "react";

import { SongsCoverWrapper } from "./style";

export default memo(function SongCover(props) {
  const { info } = props;

  return (
    <SongsCoverWrapper>
      <div className="cover-top">
        <img src={info.picUrl} width="140" alt="" />
      </div>
      <div className="cover-bottom text-nowrap">{info.name}</div>
      <div className="cover-source text-nowrap">by {info.copywriter}</div>
    </SongsCoverWrapper>
  );
});
