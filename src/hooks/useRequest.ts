import { useEffect, useState } from "react";
import http from "../utils/http";

interface PaginationType {
  pageIndex: 1;
  total?: number;
  pageSize: 30;
  onChange?: (current: number, pageSize: number) => void;
}

type Options = {
  immediate?: boolean;
  isPagination?: boolean;
  method?: string;
  initPagination?: PaginationType;
  formatResult?: (response: Response) => any;
  requestParams?: () => any;
  customRequestConfig?: (response: Response) => any;
};

const useRequest = (
  url: string,
  {
    method = "GET",
    immediate = false,
    isPagination = false,
    initPagination,
    formatResult,
    requestParams = () => {},
    customRequestConfig,
  }: Options
) => {
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    pageIndex: initPagination?.pageIndex || 1,
    pageSize: initPagination?.pageSize || 30,
    total: 0,
  });

  const onRequest = async (params?: PaginationType) => {
    try {
      setLoading(true);
      let payload: any = { ...requestParams() };
      if (isPagination) {
        payload.pageIndex = params?.pageIndex || pagination.pageIndex;
        payload.pageSize = params?.pageSize || pagination.pageSize;
      }
      console.log("payload: ", payload);

      const response = await http(url, method, {
        data: payload,
        ...customRequestConfig,
      });
      const consequence = formatResult ? formatResult(response) : response;
      const { code, data } = consequence;
      if (code === 0) {
        setResult(data);
        if (isPagination) {
          setPagination({
            pageIndex: data.pageIndex,
            pageSize: data.pageSize,
            total: data.total,
          });
        }
      }
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (immediate) {
      onRequest();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    loading,
    result,
    setResult,
    onRequest,
  };
};

export default useRequest;
