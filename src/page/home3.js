import React, { PureComponent } from 'react'
import {
    changeBanner,
    changeRecommend
} from '../store/home/actionCreators'
import {
    incAction,
    addAction,
} from '../store/counter/actionCreators'
// import { connect } from '../until/connect'
import { connect } from 'react-redux'
import axios from "axios";

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
class home extends PureComponent {

    componentDidMount() {
        axios({
            url: 'http://123.207.32.32:8000/home/multidata'
            // url:'https://www.zhengbeining.com/api/article/page?type=随记&nowpage=1&pagesize=5'
        }).then(res => {
            console.log(res.data.data)
            this.props.changeBanner(res.data.data.banner.list)
            this.props.changeRecommend(res.data.data.recommend.list)
        })
    }

    render() {
        return (
            <div>
                <h1>home3</h1>
                <h2>当前计数：{this.props.counter}</h2>
                <button onClick={e => this.props.add1()}>+1</button>
                <button onClick={e => this.props.add5(5)}>+5</button>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        counter: state.counterInfo.counter,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        add1: () => dispatch(incAction()),
        add5: v => dispatch(addAction(v)),
        changeBanner: v => dispatch(changeBanner(v)),
        changeRecommend: v => dispatch(changeRecommend(v)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(home)
