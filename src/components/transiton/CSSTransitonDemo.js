import React, { PureComponent } from 'react'
import { CSSTransition } from 'react-transition-group';
import { Button } from 'antd';
import './CSSTransition.css'

export default class CSSTransitonDemo extends PureComponent {
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
        const { isShow } = this.state
        return (
            <div>
                <Button type="primary" onClick={() => this.onChangeClick()}>切换</Button>
                <div>
                    <CSSTransition
                        in={isShow}
                        classNames='avatar'
                        timeout={1000}
                        appear
                        unmountOnExit={true}
                    >
                        <img src="http://xsili-dev.oss-cn-shenzhen.aliyuncs.com/vl/img/6ae2ad9f7c3d4bc2bc8edb21c1a4b6d1.jpg" width="50"></img>
                    </CSSTransition>
                </div>

            </div>
        )
    }
}
