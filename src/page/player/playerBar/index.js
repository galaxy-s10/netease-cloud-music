import React, { memo, useState, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import {
  getSizeImage,
  formatDate,
  getPlaySong,
} from "../../../untils/format-utils";
import {
  getSongDetailAction,
  getLyricAction,
  changeSequenceAction,
  changePlaySongAction,
} from "../store/actionCreators";

import { NavLink } from "react-router-dom";
import { Slider, message } from "antd";
import { PlaybarWrapper, Control, PlayInfo, Operator } from "./style";

export default memo(function PlayerBar() {
  const [status, setStatus] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isChanging, setIsChange] = useState(false);
  const [progress, setProgress] = useState(0);
  const dispatch = useDispatch();
  const audioRef = useRef();

  const { currentSong, sequence, playList, lyricList, currentLyricIndex } =
    useSelector((state) => {
      return {
        currentSong: state.get("player").get("currentSong"),
        sequence: state.getIn(["player", "sequence"]),
        playList: state.getIn(["player", "playList"]),
        lyricList: state.getIn(["player", "lyricList"]),
        currentLyricIndex: state.getIn(["player", "currentLyricIndex"]),
      };
    }, shallowEqual);

  useEffect(() => {
    dispatch(getSongDetailAction(513360721));
    dispatch(getLyricAction(513360721));
  }, [dispatch]);

  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id);
    audioRef.current
      .play()
      .then((res) => {
        setStatus(true);
      })
      .catch((err) => {
        setStatus(false);
      });
  }, [currentSong]);

  const author = currentSong.ar && currentSong.ar[0].name;
  const picUrl = currentSong.al && currentSong.al.picUrl;
  const duration = currentSong.dt || 0; //总时长（毫秒）
  const showDuration = formatDate(duration, "mm:ss");
  const showCurrentTime = formatDate(currentTime, "mm:ss");
  // var progress = currentTime / duration * 100

  const playOrPause = () => {
    status ? audioRef.current.pause() : audioRef.current.play();
    setStatus(!status);
  };
  const timeUpdate = (e) => {
    if (!lyricList || !lyricList.length) return;
    const cTime = e.target.currentTime; // 当前秒数（秒）
    let cIndex = 0;
    if (!isChanging) {
      setProgress(((cTime * 1000) / duration) * 100);
      setCurrentTime(cTime * 1000);
    }
    for (let i = 0; i < lyricList.length; i++) {
      if (cTime * 1000 < lyricList[i].time) {
        cIndex = i;
        break;
      }
    }
    message.open({
      key: "lyric",
      content: lyricList[cIndex - 1].content,
      duration: 0,
      className: "lyric-class",
    });
  };
  const musicEnd = () => {
    if (!lyricList || !lyricList.length) return;

    if (sequence === 2 || playList.length === 1) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      dispatch(changePlaySongAction(1));
    }
  };

  const onChange = (v) => {
    setIsChange(true);
    const p = (v / 100) * duration;
    setCurrentTime(p);
    setProgress(v);
  };

  const onAfterChange = (v) => {
    const cTime1 = (v / 100) * duration;
    audioRef.current.currentTime = cTime1 / 1000;
    setIsChange(false);
    if (!status) {
      playOrPause();
    }
  };

  const changeSequence = () => {
    let currentSequence = sequence + 1;
    currentSequence = currentSequence > 2 ? 0 : currentSequence;
    dispatch(changeSequenceAction(currentSequence));
  };

  const changeSong = (tag) => {
    dispatch(changePlaySongAction(tag));
  };

  return (
    <PlaybarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control isPlaying={status}>
          <button
            className="sprite_player prev"
            onClick={(e) => changeSong(-1)}
          ></button>
          <button
            className="sprite_player play"
            onClick={(e) => playOrPause()}
          ></button>
          <button
            className="sprite_player next"
            onClick={(e) => changeSong(1)}
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
              <a href="#/" className="singer-name">
                {author}
              </a>
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
        <Operator sequence={sequence}>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button
              className="sprite_player btn loop"
              onClick={(e) => changeSequence()}
            ></button>
            <button className="sprite_player btn playlist"></button>
          </div>
        </Operator>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={(e) => timeUpdate(e)}
        onEnded={(e) => musicEnd(e)}
      />
    </PlaybarWrapper>
  );
});
