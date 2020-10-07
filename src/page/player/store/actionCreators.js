import { getSongDetail } from '@/servies/player';


const changeSongAction = currentSong => ({
    type: "changeCurrentSong",
    currentSong,
})

export const getSongDetailAction = ids => {
    return dispatch => {
        getSongDetail(ids).then(res => {
            console.log(res.songs[0])
            dispatch(changeSongAction(res.songs[0]))
        })
    }
}