interface IDetailInfo {
  content: string;
}
export interface IProductItem {
  uid: number;
  order: number;
  categoryUid: number;
  detailInfo: IDetailInfo;
  imgCover: string;
  title: string;
}
