import { NavBar } from "antd-mobile";
import TabBar from "component/TabBar";
import useDocumentTitle from "hooks/useDocumentTitle";
import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 20px;
  text-align: center;
  color: red;
`;
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Page = () => {
  useDocumentTitle("推荐页");
  return (
    <main className="main">
      <NavBar mode="light">推荐页</NavBar>
      <Wrapper>
        <Title>使用styled-components</Title>
      </Wrapper>
      <TabBar />
    </main>
  );
};
export default Page;
