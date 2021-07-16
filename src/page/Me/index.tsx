import { Button, NavBar } from "antd-mobile";
import TabBar from "component/TabBar";
import useDocumentTitle from "hooks/useDocumentTitle";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as userStore from "state/user";
import { user, userAction } from "state/user";
const Page = () => {
  useDocumentTitle("推荐页");
  const users = useSelector(user);
  const dispatch = useDispatch();

  const getBanner = async () => {
    let res = await dispatch(userStore.fetchBanner());
    console.log("res: ", res);
  };
  useEffect(() => {
    getBanner();
  }, []);

  return (
    <main className="main">
      <NavBar mode="light">我的</NavBar>
      <div>名称：{users.name}</div>
      <div>年龄：{users.age}</div>
      <Button
        onClick={() => {
          dispatch(userAction.modify({ name: users.name, age: users.age + 1 }));
        }}
      >
        修改信息
      </Button>
      <TabBar />
    </main>
  );
};
export default Page;
