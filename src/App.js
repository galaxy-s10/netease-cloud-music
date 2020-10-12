import React, { memo } from 'react';
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import routes from "./router";
import store from "./store"

import Header from "./components/header";
import Footer from "./components/footer";
import PlayerBar from "./page/player/playerBar";

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Header></Header>
        {renderRoutes(routes)}
        <Footer></Footer>
        <PlayerBar></PlayerBar>
      </HashRouter>
    </Provider>
  );
})

// export default App;
