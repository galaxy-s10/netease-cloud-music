import React, { memo } from "react";
import { Button } from "antd";

const Home = function (props) {
  const { history } = props;
  console.log(props, 1);
  return (
    <div>
      Home页面
      {/* <Button type="primary" onClick={() => history.push('/Home')}>
        Home
      </Button> */}
    </div>
  );
};
export default memo(Home);
