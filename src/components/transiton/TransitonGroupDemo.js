import React, { PureComponent } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Button } from "antd";
import './TransitionGroup.css'
export default class TransitonGroupDemo extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            hobby: ['coding', 'music', 'run']
        }
    }
    addHobby() {
        const newHobby = [...this.state.hobby, 'play']
        this.setState({
            hobby: newHobby
        })
    }
    removeItem(index) {
        this.setState({
            hobby: this.state.hobby.filter((item, indey) => index !== indey)
        })
    }
    render() {
        const { hobby } = this.state
        return (
            <div>
                <Button type="primary" onClick={() => this.addHobby()}>click</Button>
                <TransitionGroup>
                    {
                        hobby.map((item, index) => {
                            return (
                                <CSSTransition
                                    key={item}
                                    timeout={1000}
                                    classNames="group"
                                >
                                    <div>
                                        {item}
                                        <button onClick={e => this.removeItem(index)}>-</button>
                                    </div>
                                </CSSTransition>
                            )
                        })
                    }
                </TransitionGroup>
            </div>
        )
    }
}
