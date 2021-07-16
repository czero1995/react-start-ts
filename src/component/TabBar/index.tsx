import React, { memo } from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.scss";
const Component = () => {
  console.log("tabbar渲染");
  const location = useLocation();
  return (
    <footer className={`justify_between tabbar`}>
      <Link to="/" className={`${location.pathname === "/" && "activity_tab"}`}>
        首页
      </Link>
      <Link
        to="/hot"
        className={`${location.pathname === "/hot" && "activity_tab"}`}
      >
        热门
      </Link>
      <Link
        to="recommend"
        className={`${location.pathname === "/recommend" && "activity_tab"}`}
      >
        推荐
      </Link>
      <Link
        to="me"
        className={`${location.pathname === "/me" && "activity_tab"}`}
      >
        我的
      </Link>
    </footer>
  );
};
export default memo(Component);
