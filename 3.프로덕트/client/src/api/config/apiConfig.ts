import axios, { AxiosRequestConfig } from "axios";

const HOST_URL = import.meta.env.VITE_SERVER_BASE_URL;

const API_CONFIG: AxiosRequestConfig = {
  // baseURL: HOST_URL,
  baseURL: "",
  withCredentials: true,
};

const apiConfig = axios.create(API_CONFIG);

export default apiConfig;
