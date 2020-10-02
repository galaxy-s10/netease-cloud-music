const initCounterState = {
    counter: 0,
}
function counterReducer(state = initCounterState, action) {
    switch (action.type) {
        case 'ADD_NUMBER':
            return { ...state, counter: state.counter + action.num };
        case 'SUB_NUMBER':
            return { ...state, counter: state.counter - action.num };
        case 'INCREMENT':
            return { ...state, counter: state.counter + 1 };
        case 'DECREMENT':
            return { ...state, counter: state.counter - 1 };
        default:
            return state;
    }
}

export default counterReducer;
