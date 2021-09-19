import React, { memo } from "react";
import { renderRoutes } from "react-router-config";
import { BrowserRouter, withRouter } from "react-router-dom";
import { Button } from "antd";
import routes from "./router";
// import Login from "./pages/login";

console.log(routes, 99);
const App = function (props) {
  console.log(props);
  const { history } = props;
  return (
    <div>
      {renderRoutes(routes)}
      {/* <Login></Login> */}
      <Button type="primary" onClick={() => history.push("/dashboard")}>
        Dashboard
      </Button>
    </div>
  );
};
// export default memo(App);
export default memo(withRouter(App));
