import { Map } from 'immutable';

const defaultState = Map({
    currentSong: {}
})

function reducer(state = defaultState, action) {
    switch (action.type) {
        case "changeCurrentSong":
            return state.set("currentSong", action.currentSong)
        default:
            return state
    }
}

export default reducer