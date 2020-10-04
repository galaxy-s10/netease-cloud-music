import React, { PureComponent, useEffect, useCallback } from 'react'
import {
    decAction,
    subAction
} from '../store/counter/actionCreators'
// import { connect } from '../until/connect'
import { connect, useSelector, useDispatch, shallowEqual } from 'react-redux';

const About = function (props) {
    console.log('about重新渲染了')
    const dispatch = useDispatch()

    const { counter, banner, recommend } = useSelector(state => {
        console.log(state)
        return {
            // counter: state.counterInfo.counter,
            banner: state.homeInfo.banner,
            recommend: state.homeInfo.recommend,
        }
    },shallowEqual)
    const sub1 = useCallback(() => {
        console.log('add1')
        dispatch(decAction())
    }, [])

    const sub5 = useCallback((v) => {
        console.log('add5')
        dispatch(subAction(v))
    }, [])

    return (
        <div>
            <h1>about3</h1>
            {/* <h2>当前计数：{counter}</h2> */}
            <button onClick={e => sub1()}>-1</button>
            <button onClick={e => sub5(5)}>-5</button>
            <h2>banner</h2>
            <ul>
                {
                    banner.map((item, index) => {
                        return <li key={item.acm}>{item.title}</li>
                    })
                }
            </ul>
            <h2>recommend</h2>
            <ul>
                {
                    recommend.map((item, index) => {
                        return <li key={item.acm}>{item.title}</li>
                    })
                }
            </ul>
        </div>
    )
}

// const mapStateToProps = state => {
//     return {
//         // counter: state.counterInfo.counter,
//         banner: state.homeInfo.banner,
//         recommend: state.homeInfo.recommend,
//     }
// }
// const mapDispatchToProps = dispatch => {
//     return {
//         sub1: () => dispatch(decAction()),
//         sub5: (e) => dispatch(subAction(e)),
//     }
// }

export default About
// export default connect(mapStateToProps, mapDispatchToProps)(about)
