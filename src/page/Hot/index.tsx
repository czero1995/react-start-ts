import { Button, NavBar } from "antd-mobile";
import TabBar from "component/TabBar";
import useDocumentTitle from "hooks/useDocumentTitle";
import useRequest from "hooks/useRequest";
import React, { Suspense, useCallback, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { counter } from "state/home";
import { useImmer } from "use-immer";
import ChildOne from "./components/childOne";
import ChildTwo from "./components/childTwo";
const ChildThree = React.lazy(() => import("./components/childThree"));
const Page = () => {
  const count = useSelector(counter);
  const [person, setPerson] = useImmer({
    name: "马云",
    age: 1,
  });
  const [one, setOne] = useState(1);
  const [title, setTitle] = useState(1);
  const memoProps = useMemo(
    () => ({ one: `title${one}`, two: "title2" }),
    [one]
  );
  // const title = {
  //   one:'title1',
  //   two:'title2'
  // }
  useDocumentTitle("热门页");
  const { result } = useRequest(`product/detail`, {
    immediate: true,
    requestParams: () => {
      return { uid: 1 };
    },
  });

  const onChangeMemo = useCallback(() => {
    console.log("changeMemo");
  }, []);
  return (
    <main className="main">
      {/* <div> {count.value} </div> */}
      <NavBar mode="light">热门页</NavBar>

      <div
        onClick={() => {
          setPerson((draft) => {
            draft.age = draft.age + 1;
          });
        }}
      >
        使用immer测试
      </div>
      <section>客户{person.name}</section>
      <section>年龄{person.age}</section>

      <h2>memo包裹子组件，防止重负渲染,只能是简单类型</h2>
      <ChildOne title={title} />
      <Button
        type="primary"
        onClick={() => {
          setTitle(title + 1);
        }}
      >
        修改简单参数
      </Button>

      <h2>useMemo</h2>
      <h4>
        如果父组件传递参数到子组件是个对象类型，不管对象是否改变，只组件都会重复渲染。因为父组件渲染，导致子组件重新生成一个新对象，传递给子组件的info属性值变化，进而导致子组件重新渲染
      </h4>
      <ChildTwo title={memoProps} onChangeMemo={onChangeMemo} />
      <TabBar />
      <Button
        type="primary"
        onClick={() => {
          setOne(one + 1);
        }}
      >
        修改useMemo包裹的对象参数 和useCallbackback
      </Button>

      <h2>useCallback</h2>
      <h4>
        父组件将事件传递给子组件，也会造成重复渲染，父组件的变量值改变，导致父组件重新渲染，父组件重新渲染，会从新创建事件函数，即传递给子组件的函数属性也发生了变化，导致子组件渲染
      </h4>

      <Suspense fallback={<div>Loading...</div>}>
        <ChildThree />
      </Suspense>
    </main>
  );
};
export default Page;
