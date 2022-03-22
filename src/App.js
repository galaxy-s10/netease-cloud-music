import React, { memo } from "react";
import { renderRoutes } from "react-router-config";
import { HashRouter, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import routes from "./router";
import store from "./store";

import Header from "./components/header";
import Footer from "./components/footer";
import PlayerBar from "./page/player/playerBar";
import { outputStaticUrl } from "./config/outputStaticUrl";

export default memo(function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={outputStaticUrl()}>
        <Header></Header>
        {renderRoutes(routes)}
        <Footer></Footer>
        <PlayerBar></PlayerBar>
      </BrowserRouter>
    </Provider>
  );
});

// export default App;
