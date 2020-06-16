// 包含一些工具函数的模块
import { v4 as uuidv4 } from "uuid";
// 用户临时ID
export function getuserTempId() {
  // 从localStorage中读取, 如果有返回它
  let userTempId = localStorage.getItem("USER_TEMP_ID_KEY");
  // 如果没有, 使用uuid生成一个新的, 保存到localStorage中, 返回它
  if (!userTempId) {
    userTempId = uuidv4();
    localStorage.setItem("USER_TEMP_ID_KEY", userTempId);
  }
  return userTempId;
}
// 保存用户信息到local
export function saveUserInfo(userInfo) {
  window.localStorage.setItem("RECEIVE_USER_INFO", JSON.stringify(userInfo));
}
// 读取local中的用户信息
export function getUserInfo() {
  return JSON.parse(window.localStorage.getItem("RECEIVE_USER_INFO")) || {};
}
// 删除local中的用户信息
export function removeUserInfo() {
  window.localStorage.removeItem("RECEIVE_USER_INFO");
}
