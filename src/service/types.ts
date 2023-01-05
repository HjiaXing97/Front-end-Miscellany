import type { AxiosRequestConfig, AxiosResponse } from "axios";

export interface IRequestInterceptors {
  requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestFailureFn?: (err: any) => any;
  responseSuccessFn?: (config: AxiosResponse) => AxiosResponse;
  responseFailureFn?: (err: any) => any;
}

export interface IRequestConfig extends AxiosRequestConfig {
  interceptors?: IRequestInterceptors;
}
