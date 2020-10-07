import React, { memo, useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getSizeImage, formatDate, getPlaySong } from "../../../untils/format-utils";
import { getSongDetailAction } from "../store/actionCreators";

import { message } from 'antd';
import { NavLink } from 'react-router-dom';
import { Slider } from 'antd';
import {
  PlaybarWrapper,
  Control,
  PlayInfo,
  Operator
} from './style';

export default memo(function PlayerBar() {
  const [status, setStatus] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isChanging, setIsChange] = useState(false);
  const [progress, setProgress] = useState(0);
  const dispatch = useDispatch()
  const audioRef = useRef()

  const { currentSong } = useSelector(state => {
    return { currentSong: state.get("player").get("currentSong") }
  }, shallowEqual)

  useEffect(() => {
    dispatch(getSongDetailAction(1344897943))
  }, [dispatch])

  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id)
  }, [currentSong])

  const author = currentSong.ar && currentSong.ar[0].name
  const picUrl = currentSong.al && currentSong.al.picUrl
  const duration = currentSong.dt || 0; //总时长（毫秒）
  const showDuration = formatDate(duration, "mm:ss");
  const showCurrentTime = formatDate(currentTime, "mm:ss");
  // var progress = currentTime / duration * 100


  const playOrPause = () => {
    status ? audioRef.current.pause() : audioRef.current.play()
    setStatus(!status)
  }
  const timeUpdate = (e) => {
    const cTime = e.target.currentTime; // 当前秒数（秒）
    
    setCurrentTime(cTime * 1000)
    console.log('timeUpdate',cTime)
    if (!isChanging) {
      setProgress(cTime * 1000 / duration * 100)
    }
  }

  const onChange = v => {
    console.log(v, duration)
    setIsChange(true)
    // const p = (v / 100) * duration
    // setCurrentTime(p)
    setProgress(v)
  }

  const onAfterChange = v => {
    console.log('放手了！')
    console.log(v)
    const cTime1 = (v / 100) * duration
    audioRef.current.currentTime = cTime1 / 1000
    console.log(audioRef.current.currentTime)
    // if (!status) {
    //   console.log('重新播放了')
    //   playOrPause()
    // }
    setIsChange(false)

  }
  return (
    <PlaybarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control isPlaying={status}>
          <button className="sprite_player prev"
          ></button>
          <button
            className="sprite_player play"
            onClick={e => playOrPause()}
          ></button>
          <button className="sprite_player next"
          ></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img src={picUrl} width="35" alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <a href="#/" className="singer-name">{author}</a>
            </div>
            <div className="progress">
              <Slider
                value={progress}
                onChange={onChange}
                onAfterChange={onAfterChange}
              />
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider">/</span>
                <span className="duration">{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop"></button>
            <button className="sprite_player btn playlist"></button>
          </div>
        </Operator>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={e => timeUpdate(e)}
      />
    </PlaybarWrapper>
  )
});
