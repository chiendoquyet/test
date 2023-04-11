import { ApiConstant } from "@root/const";
import axios from "axios";

const Api = axios.create({
  baseURL: ApiConstant.BASE_URL,
  timeout: ApiConstant.TIME_OUT_REQUEST,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "3EC79C17-63ED-4166-BD58-04397B94312C",
  },
});

export default Api;
