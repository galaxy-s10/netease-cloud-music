import React, { memo } from 'react';

import {
  PlayerWrapper,
  PlayerLeft,
  PlayerRight
} from './style';

export default memo(function Player() {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <h2>PlayerInfo</h2>
          <h2>SongContent</h2>
        </PlayerLeft>
        <PlayerRight>
          <h2>SimiPlaylist</h2>
          <h2>SimiSong</h2>
          <h2>Download</h2>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  )
})
