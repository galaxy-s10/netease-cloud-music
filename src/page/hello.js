import React, { PureComponent } from 'react'
import { Button, Input } from 'antd';
export default class hello extends PureComponent {
    render() {
        return (
            <div>
                <Button type="primary">Primary Button</Button>
                <Input placeholder="请输入"></Input>
            </div>
        )
    }
}