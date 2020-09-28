import React, { PureComponent } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { Button } from 'antd';
import "./SwitchTransition.css";

export default class SwitchTransitonDemo extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            isShow: true
        }
    }
    onChangeClick() {
        this.setState({
            isShow: !this.state.isShow
        })
    }
    render() {
        const { isShow } = this.state;
        return (
            <div>
                <SwitchTransition>
                    <CSSTransition
                        key={isShow}
                        timeout={500}
                        classNames="btn"
                    >
                        <Button type="primary" onClick={() => this.onChangeClick()}>{isShow ? 'on' : 'off'}</Button>
                    </CSSTransition>
                </SwitchTransition>
            </div>
        )
    }
}
