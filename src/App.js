import React from 'react';
// import Hello from './components/hello'
import CSSTransitonDemo from './components/transiton/CSSTransitonDemo.js'
import SwitchTransitonDemo from './components/transiton/SwitchTransitonDemo'
import TransitonGroupDemo from './components/transiton/TransitonGroupDemo'
import Home from './page/home'
import About from './page/about'

function App() {
  return (
    <div>
      {/* <CSSTransitonDemo /> */}
      {/* <SwitchTransitonDemo /> */}
      {/* <TransitonGroupDemo /> */}
      <Home></Home>
      <About></About>
    </div>
  );
}

export default App;
