const initHomeState = {
    banner: [],
    recommend: []
}
function homeReducer(state = initHomeState, action) {
    switch (action.type) {
        case 'CHANGE_BANNER':
            return { ...state, banner: action.banner };
        case 'CHANGE_RECOMMEND':
            return { ...state, recommend: action.recommend };
        default:
            return state;
    }
}
export default homeReducer;
