import axios from "axios";
import Cookies from "js-cookie";
import { BASE_URL } from "../../utils/constants";

axios.defaults.baseURL = BASE_URL;

axios.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");

    if (!token) {
      localStorage.removeItem("auth-token");
      Cookies.remove("token");
      return;
    }

    config.headers.Authorization = token;
    config.headers["Content-Type"] = "application/json";
    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    }

    return config;
  },
  (error) => Promise.reject(error),
);

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("auth-token");
      Cookies.remove("token");
      window.location.href = "/login";
    } else {
      return Promise.reject(error);
    }
  },
);

export default axios;

export const baseAxios = axios.create();
