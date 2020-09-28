import React, { PureComponent } from 'react'
import { SwitchTransition, CSSTransition, TransitionGroup } from 'react-transition-group';
import { Button } from 'antd';

export default class CssTransitonDemo extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            isShow: true
        }
    }
    render() {
        const { isShow } = this.state
        return (
            <div>
                <Button type="primary" onClick={() => this.onChangeClick}>切换</Button>
                <CSSTransition
                    in={isShow}
                    classNames='text'
                >
                    <div>
                        <img src="http://xsili-dev.oss-cn-shenzhen.aliyuncs.com/vl/img/6ae2ad9f7c3d4bc2bc8edb21c1a4b6d1.jpg" width="50"></img>
                    </div>

                </CSSTransition>
            </div>
        )
    }
}
