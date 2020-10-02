import React, { PureComponent } from 'react'
import {
    decAction,
    subAction
} from '../store/counter/actionCreators'
import { connect } from '../until/connect'

function about(props) {
    return (
        <div>
            <h1>about2</h1>
            <h2>当前计数：{props.counter}</h2>
            <button onClick={e => props.sub1()}>-1</button>
            <button onClick={e => props.sub5(5)}>-5</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}
const mapDispatchToProps = dispatch => {
    return {
        sub1: () => dispatch(decAction()),
        sub5: (e) => dispatch(subAction(e)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(about)
