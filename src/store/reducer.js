import counterReducer from './counter'
import homeReducer from './home'

const defaultState = {
    counterInfo: null,
    homeInfo: null
}
// function reducer(state = defaultState, action) {
function reducer(state = {}, action) {
    return {
        counterInfo: counterReducer(state.counterInfo, action),
        homeInfo: homeReducer(state.homeInfo, action),
    }
    // switch (action.type) {
    //     case 'ADD_NUMBER':
    //         return { ...state, counter: state.counter + action.num };
    //     case 'SUB_NUMBER':
    //         return { ...state, counter: state.counter - action.num };
    //     case 'INCREMENT':
    //         return { ...state, counter: state.counter + 1 };
    //     case 'DECREMENT':
    //         return { ...state, counter: state.counter - 1 };
    //     case 'CHANGE_BANNER':
    //         return { ...state, banner: action.banner };
    //     case 'CHANGE_RECOMMEND':
    //         return { ...state, recommend: action.recommend };
    //     default:
    //         return state;
    // }
}

export default reducer;
