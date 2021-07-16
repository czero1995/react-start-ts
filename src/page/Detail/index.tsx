import { Icon, NavBar } from "antd-mobile";
import useDocumentTitle from "hooks/useDocumentTitle";
import useRequest from "hooks/useRequest";
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { IProductItem } from "types";
import styles from "./index.module.scss";
const Page = () => {
  useDocumentTitle("详情页");
  const history = useHistory();
  const { uid } = useParams<{ uid: string }>();
  const { result }: { result: IProductItem } = useRequest(`product/detail`, {
    immediate: true,
    requestParams: () => {
      return { uid };
    },
  });
  return (
    <main>
      {result && (
        <>
          <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={() => history.goBack()}
          >
            {result.title}
          </NavBar>
          <img
            src={result.imgCover}
            alt={result.title}
            className={styles.imgCover}
          />
          <div
            dangerouslySetInnerHTML={{ __html: result.detailInfo.content }}
          ></div>
        </>
      )}
    </main>
  );
};
export default Page;
