import React, { PureComponent } from 'react'
import store from '../store'
import { subAction } from '../store/actionCreators'

export default class home extends PureComponent {
    constructor(porps) {
        super(porps)
        this.state = {
            counter: store.getState().counter
        }
    }
    increment(e){
        console.log('increment')
        store.dispatch(subAction(1))
    }
    addNumber(e){
        console.log('addnumber')
        store.dispatch(subAction(e))
    }
    componentDidMount(){
        this.unsubscribe = store.subscribe(()=>{
            this.setState({
                counter: store.getState().counter
            })
        })
    }
    componentWillUnmount(){
        this.unsubscribe()
    }
    render() {
        return (
            <div>
                <hr/>
                <h1>about</h1>
                <h2>当前计数：{this.state.counter}</h2>
                <button onClick={e=>this.increment()}>-1</button>
                <button onClick={e=>this.addNumber(5)}>-5</button>
            </div>
        )
    }
}
