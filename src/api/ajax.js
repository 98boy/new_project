import axios from "axios";
import NProgress from "nprogress";
import store from "@/store";
// 配置通用的基础路径和超市
const instance = axios.create({
  // 基础path
  baseURL: "/api",
  // baseURL: 'http://182.92.128.115/api',
  // 请求超时时间
  timeout: 1500,
});
// 请求拦截器  请求发送前执行
instance.interceptors.request.use((config) => {
  // 显示请求进度条
  NProgress.start();
  config.headers.userTempId = store.state.user.userTempId;
  const token = store.state.user.userInfo.token;
  if (token) {
    config.headers["token"] = token;
  }
  return config;
});
// 响应拦截器
instance.interceptors.response.use(
  // 请求成功
  (response) => {
    // 隐藏请求进度条
    NProgress.done();
    return response.data;
  },
  // 请求失败
  (error) => {
    // 隐藏请求进度条
    NProgress.done();
    // 统一处理请求错误
    alert(error.message || "未知错误");
    // 抛出error 或返回失败的promise
    // throw error
    return Promise.reject(error);
  }
);

export default instance;
