import React, { PureComponent } from 'react'
import {
    incAction,
    addAction
} from '../store/counter/actionCreators'
import { connect } from '../until/connect'

// export default class home extends PureComponent {
//     render() {
//         return (
//             <div>
//                 <h1>home</h1>
//                 <h2>当前计数：{this.props.counter}</h2>
//                 <button onClick={e => this.props.add1()}>+1</button>
//                 <button onClick={e => this.props.add5(5)}>+5</button>
//             </div>
//         )
//     }
// }
function home(props) {
    return (
        <div>
            <h1>home2</h1>
            <h2>当前计数：{props.counter}</h2>
            <button onClick={e => props.add1()}>+1</button>
            <button onClick={e => props.add5(5)}>+5</button>
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
        add1: () => dispatch(incAction()),
        add5: (e) => dispatch(addAction(e)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(home)
