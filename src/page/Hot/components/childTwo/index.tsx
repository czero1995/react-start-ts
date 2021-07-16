import React, { memo } from "react";

const Component = ({ title, onChangeMemo }) => {
  console.log("我是子组件2");

  return <div>我是子组件2{title.one}</div>;
};
export default memo(Component);
