import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

class JxRequest {
  instance: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);

    this.instance.interceptors.request.use(
      (config) => config,
      (error) => error
    );

    this.instance.interceptors.response.use(
      (config) => config,
      (error) => error
    );
  }

  request(config: AxiosRequestConfig) {
    this.instance
      .request({ ...config })
      .then((res) => {
        return res;
      })
      .catch((e) => e);
  }

  get(config: AxiosRequestConfig) {
    return this.request({ ...config, method: "get" });
  }

  post(config: AxiosRequestConfig) {
    return this.request({ ...config, method: "post" });
  }
}

export default JxRequest;
