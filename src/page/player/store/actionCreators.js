import { getSongDetail, getLyric } from "@/servies/player";
import { parseLyric } from "../../../untils/lrc-parse";

const changeCurrentSongAction = (currentSong) => ({
  type: "changeCurrentSong",
  currentSong,
});
const changeCurrentSongIndexAction = (currentSongIndex) => ({
  type: "changeCurrentSongIndex",
  currentSongIndex,
});
const changePlayListAction = (playList) => ({
  type: "changePlayList",
  playList,
});

export const changeSequenceAction = (sequence) => ({
  type: "changeSequence",
  sequence,
});
export const changeLyricListAction = (lyricList) => ({
  type: "changeLyricList",
  lyricList,
});
export const changeLyricListIndexAction = (currentLyricIndex) => ({
  type: "changeCurrentLyricIndex",
  currentLyricIndex,
});

export const changePlaySongAction = (tag) => {
  return (dispatch, getState) => {
    let playList = getState().getIn(["player", "playList"]);
    let sequence = getState().getIn(["player", "sequence"]);
    let currentSongIndex = getState().getIn(["player", "currentSongIndex"]);
    switch (sequence) {
      case 1:
        let random = Math.floor(Math.random() * playList.length);
        while (random === currentSongIndex) {
          random = Math.floor(Math.random() * playList.length);
        }
        currentSongIndex = random;
        break;
      default:
        if (tag === -1) {
          // 上一首
          currentSongIndex =
            currentSongIndex == 0 ? playList.length - 1 : currentSongIndex - 1;
        } else {
          // 下一首
          currentSongIndex =
            currentSongIndex == playList.length - 1 ? 0 : currentSongIndex + 1;
        }
    }
    const currentSong = playList[currentSongIndex];
    dispatch(changeCurrentSongAction(playList[currentSongIndex]));
    dispatch(changeCurrentSongIndexAction(currentSongIndex));

    dispatch(getLyricAction(currentSong.id));
  };
};

export const getSongDetailAction = (ids) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(["player", "playList"]);
    const currentIndex = playList.findIndex((song) => song.id == ids);

    if (currentIndex !== -1) {
      // 在播放列表里找到歌曲
      dispatch(changeCurrentSongIndexAction(currentIndex));
      const currentSong = playList[currentIndex];
      dispatch(changeCurrentSongAction(currentSong));
    } else {
      // 在播放列表里没有找到歌曲
      getSongDetail(ids).then((res) => {
        const song = res.songs && res.songs[0];
        if (!song) return;
        const newPlayList = [...playList];
        newPlayList.push(song);
        dispatch(changePlayListAction(newPlayList));
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
        dispatch(changeCurrentSongAction(song));
      });
    }

    // 获取当前的歌词,并且解析
    dispatch(getLyricAction(ids));
    // getLyric(ids).then(res => {
    //     const lrcString = res.lrc.lyric;
    //     const lyrics = parseLyric(lrcString);
    //     dispatch(changeLyricsAction(lyrics));
    // });
  };
};

export const getLyricAction = (ids) => {
  return (dispatch, getState) => {
    getLyric(ids).then((res) => {
      const lrcList = parseLyric(res.lrc.lyric);
      dispatch(changeLyricListAction(lrcList));
    });
  };
};
