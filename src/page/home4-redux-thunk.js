import React, { PureComponent } from 'react'
import {
    incAction,
    addAction
} from '../store/counter/actionCreators'
import {
    getHomeMultidata
} from '../store/home/actionCreators'
// import { connect } from '../until/connect'
import { connect } from 'react-redux'

class home extends PureComponent {

    componentDidMount() {
        this.props.getHomeMultidata()
    }

    render() {
        return (
            <div>
                <h1>home4-redux-thunk</h1>
                <h2>当前计数：{this.props.counter}</h2>
                <button onClick={e => this.props.add1()}>+1</button>
                <button onClick={e => this.props.add5(5)}>+5</button>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        counter: state.counter,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        add1: () => dispatch(incAction()),
        add5: v => dispatch(addAction(v)),
        getHomeMultidata: () => dispatch(getHomeMultidata)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(home)
