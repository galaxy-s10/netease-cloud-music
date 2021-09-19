import React, { memo } from "react";
import { Button } from "antd";
const Dashboard = function (props) {
  const { history } = props;
  console.log("dashboard");
  return <div>Dashboard页面</div>;
};
export default memo(Dashboard);
