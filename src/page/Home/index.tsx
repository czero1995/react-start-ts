import { Carousel, NavBar } from "antd-mobile";
import TabBar from "component/TabBar";
import useDocumentTitle from "hooks/useDocumentTitle";
import useRequest from "hooks/useRequest";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useHistory } from "react-router-dom";
import { IProductItem } from "types";
import styles from "./index.module.scss";
import { IBannerItem } from "./type";
const Page = () => {
  useDocumentTitle("首页");
  const history = useHistory();
  const { result: bannerList }: { result: IBannerItem[] } = useRequest(
    "banner/all",
    { immediate: true }
  );
  const { result: productList }: { result: IProductItem[] } = useRequest(
    "product/all",
    {
      immediate: true,
      requestParams: () => {
        return { categoryUid: 1 };
      },
    }
  );
  const toDetail = (uid: number) => {
    history.push(`/detail/${uid}`);
  };
  return (
    <main className="main">
      <NavBar mode="light">首页</NavBar>
      <section className={styles.content}>
        {bannerList && (
          <Carousel autoplay={false} infinite>
            {bannerList.map((item) => (
              <div style={{ height: "160px" }} key={item.uid}>
                <img
                  src={item.img}
                  style={{ height: "160px", width: "100%" }}
                  alt={item.title}
                />
              </div>
            ))}
          </Carousel>
        )}

        <section className="flex flex_wrap">
          {productList &&
            productList.map((item) => (
              <div
                className={styles.productItem}
                key={item.uid}
                onClick={() => toDetail(item.uid)}
              >
                <LazyLoadImage
                  src={item.imgCover}
                  effect="opacity"
                  className={styles.productCover}
                  alt={item.title}
                />
                <section className={styles.productInfo}>
                  <h3 className={styles.productTitle}> {item.title} </h3>
                </section>
              </div>
            ))}
        </section>
      </section>

      <TabBar />
    </main>
  );
};
export default Page;
