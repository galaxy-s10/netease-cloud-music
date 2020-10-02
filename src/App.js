import React from 'react';
import {
  BrowserRouter,
  Link,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';


import Hello from './page/hello'
import User from './page/user'
import CSSTransitonDemo from './components/transiton/CSSTransitonDemo.js'
import SwitchTransitonDemo from './components/transiton/SwitchTransitonDemo'
import TransitonGroupDemo from './components/transiton/TransitonGroupDemo'
import Home from './page/home'
import Home2 from './page/home2'
import Home3 from './page/home3'
import Home4 from './page/home4-redux-thunk'
import Home5 from "./page/home5-redux-saga";
import About from './page/about'
import About2 from './page/about2'
import About3 from './page/about3'
import notFound from './page/notFound';

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <NavLink exact to="/" activeStyle={{ color: 'red' }}>Hello</NavLink>
        <NavLink to="home" activeStyle={{ color: 'red' }}>Home</NavLink>
        <NavLink to="about" activeStyle={{ color: 'red' }}>About</NavLink> */}
        <NavLink exact to="/" activeClassName="activeCss">Hello</NavLink>
        <NavLink to="home" activeClassName="activeCss">Home</NavLink>
        <NavLink to="about" activeClassName="activeCss">About</NavLink>

        <Switch>
          <Route exact path="/" component={Hello}></Route>
          <Route path="/home" component={Home3}></Route>
          <Route path="/about" component={About3}></Route>
          <Route path="/:id" component={User}></Route>
          <Route component={notFound}></Route>
        </Switch>

      </BrowserRouter>

      {/* <CSSTransitonDemo /> */}
      {/* <SwitchTransitonDemo /> */}
      {/* <TransitonGroupDemo /> */}
      {/* <Home></Home> */}
      {/* <Home2></Home2> */}
      {/* <Home3></Home3> */}
      {/* <Home4></Home4> */}
      {/* <Home5></Home5> */}
      {/* <About3></About3> */}
    </div>
  );
}

export default App;
