import React, { memo } from "react";

const Component = ({ title }) => {
  console.log("我是子组件1");
  return <div>我是子组件1:title{title}</div>;
};
export default memo(Component);
