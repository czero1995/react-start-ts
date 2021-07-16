import React, { memo } from "react";

const Component = () => {
  console.log("我是子组件3");
  return <h2>我是子组件3,React.lazy懒加载</h2>;
};
export default memo(Component);
