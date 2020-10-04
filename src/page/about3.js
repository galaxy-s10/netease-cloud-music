import React, { PureComponent } from 'react'
import {
    decAction,
    subAction
} from '../store/counter/actionCreators'
// import { connect } from '../until/connect'
import { connect } from 'react-redux'

function about(props) {
    console.log('about重新渲染了')
    return (
        <div>
            <h1>about3</h1>
            {/* <h2>当前计数：{props.counter}</h2> */}
            <button onClick={e => props.sub1()}>-1</button>
            <button onClick={e => props.sub5(5)}>-5</button>
            <h2>banner</h2>
            <ul>
                {
                    props.banner.map((item, index) => {
                        return <li key={item.acm}>{item.title}</li>
                    })
                }
            </ul>
            <h2>recommend</h2>
            <ul>
                {
                    props.recommend.map((item, index) => {
                        return <li key={item.acm}>{item.title}</li>
                    })
                }
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        // counter: state.counterInfo.counter,
        banner: state.homeInfo.banner,
        recommend: state.homeInfo.recommend,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        sub1: () => dispatch(decAction()),
        sub5: (e) => dispatch(subAction(e)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(about)
