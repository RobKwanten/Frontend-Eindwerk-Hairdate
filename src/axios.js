import axios from 'axios';
import Cookies from 'js-cookie';

const instance = axios.create({
    baseURL: "https://wdev.be/wdev_rob/eindwerk/api",
  });

instance.interceptors.request.use(
  (config) => {
    const token = Cookies.get("jwt");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default instance;