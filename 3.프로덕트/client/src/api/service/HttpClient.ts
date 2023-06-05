import apiConfig from "../config/apiConfig";

const HttpClient = {
  get: (url: string, params?: any) => {
    return apiConfig({
      url,
      params,
      method: "GET",
    }).then((res) => res.data);
  },

  post: (url: string, data: any) => {
    return apiConfig({
      url,
      data,
      method: "POST",
    }).then((res) => res.data);
  },
};

export default HttpClient;
