import { BASE_URL, TIME_OUT } from "./config";
import JxRequest from "./request";

const devRequest = new JxRequest({
  timeout: TIME_OUT,
  baseURL: BASE_URL,
  headers: {
    accessToken: "Bearer",
    Authorization: "Bearer"
  }
});

export default devRequest;
