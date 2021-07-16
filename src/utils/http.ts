const apiUrl = process.env.REACT_APP_API_URL;

interface Map {
  [key: string]: any;
  [index: number]: any;
}

interface Config extends RequestInit {
  token?: string;
  data?: Map;
}

const http = async (
  url: string,
  method = "GET",
  { data, token, headers, ...customConfig }: Config = {}
) => {
  const config: any = {
    method,
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": data ? "application/json" : "",
    },
    ...customConfig,
  };

  if (method.toUpperCase() === "GET") {
    if (data && Object.keys(data).length > 0) {
      let params: string[] = [];
      Object.keys(data).forEach((key) => params.push(key + "=" + data[key]));
      url += "?" + params.join("&");
    }
  } else {
    config.body = JSON.stringify(data || {});
  }

  return window.fetch(`${apiUrl}/${url}`, config).then(async (response) => {
    if (response.status === 401) {
      return Promise.reject({ message: "请清新登录" });
    }

    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
};

export default http;
