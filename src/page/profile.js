import React, { PureComponent } from 'react'
import { NavLink, Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Article from './article'
import Msg from './msg'
import Setting from './setting'

export default class Profile extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: true
        }
    }
    render() {
        return this.state.isLogin ? (
            <div>
                <h1>Profile</h1>
                {/* <BrowserRouter> */}
                    <NavLink to="/profile">文章</NavLink>
                    <NavLink to="/profile/msg">消息</NavLink>
                    <NavLink to="/profile/setting">设置</NavLink>
                {/* </BrowserRouter> */}
                <Switch>
                    <Route exact path="/profile" component={Article}></Route>
                    <Route path="/profile/msg" component={Msg}></Route>
                    <Route path="/profile/setting" component={Setting}></Route>
                </Switch>
            </div>
        ) : <Redirect to="/login"></Redirect>
    }
}
