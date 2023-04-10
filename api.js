import { ApiConstant } from "@root/const";
import Cookies from "js-cookie";
import axios from "axios";

const Api = axios.create({
  baseURL: ApiConstant.BASE_URL,
  timeout: ApiConstant.TIME_OUT_REQUEST,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: Cookies.get(ApiConstant.KEY_TOKEN),
  },
});

export default Api;
