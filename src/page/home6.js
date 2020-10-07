import React, { PureComponent, useEffect, useCallback } from 'react'
import {
    incAction,
    addAction
} from '../store/counter/actionCreators'
import {
    getHomeMultidata
} from '../store/home/actionCreators'
// import { connect } from '../until/connect'
import { connect, useSelector, useDispatch, shallowEqual } from 'react-redux';

function Home(props) {

    const dispatch = useDispatch()

    const { counter } = useSelector(state => {
        console.log('useSelectoruseSelectoruseSelector')
        return {
            counter: state.counterInfo.counter
        }
    }, shallowEqual)

    useEffect(() => {
        dispatch(getHomeMultidata)
    }, [dispatch])

    const add1 = useCallback(() => {
        console.log('add1')
        dispatch(incAction())
    }, [])
    const add5 = useCallback((v) => {
        console.log('add5')
        dispatch(addAction(v))
    }, [])
    return (
        <div>
            <h1>home6</h1>
            <h2>当前计数：{counter}</h2>
            <button onClick={e => add1()}>+1</button>
            <button onClick={e => add5(5)}>+5</button>
        </div>
    )

}


export default Home

// class home extends PureComponent {

//     componentDidMount() {
//         this.props.getHomeMultidata()
//     }

//     render() {
//         return (
//             <div>
//                 <h1>home6</h1>
//                 <h2>当前计数：{this.props.counter}</h2>
//                 <button onClick={e => this.props.add1()}>+1</button>
//                 <button onClick={e => this.props.add5(5)}>+5</button>
//             </div>
//         )
//     }

// }

// const mapStateToProps = state => {
//     console.log('mapStateToPropsmapStateToPropsmapStateToProps')
//     return {
//         counter: state.counter,
//     }
// }
// const mapDispatchToProps = dispatch => {
//     console.log('mapDispatchToPropsmapDispatchToPropsmapDispatchToProps')
//     return {
//         add1: () => dispatch(incAction()),
//         add5: v => dispatch(addAction(v)),
//         getHomeMultidata: () => dispatch(getHomeMultidata)
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(home)
