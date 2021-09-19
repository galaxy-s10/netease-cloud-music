import React, { memo } from "react";
import { Button } from "antd";

const Login = function (props) {
  const { history } = props;
  console.log(props, 1);
  return (
    <div>
      login页面
      {/* <Button type="primary" onClick={() => history.push('/login')}>
        Login
      </Button> */}
      <Button type="primary" onClick={() => history.push("/dashboard")}>
        Dashboard
      </Button>
    </div>
  );
};
export default memo(Login);
