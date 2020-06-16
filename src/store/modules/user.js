// 管理用户数据
import { reqRegister, reqLogin, reqLogout } from "@/api";
import { getuserTempId } from "@/utils";
import { saveUserInfo, getUserInfo, removeUserInfo } from "@/utils";

export default {
  state: {
    // 用户登录信息  有数据就自动登录
    userInfo: getUserInfo(),
    userTempId: getuserTempId(),
  },
  mutations: {
    RECEIVE_USER_INFO(state, userInfo) {
      state.userInfo = userInfo;
    },
    RESET_USER_INFO(state) {
      state.userInfo = {};
    },
  },
  actions: {
    // 注册的异步action
    async register({ commit }, iserInfo) {
      const result = await reqRegister(iserInfo);
      if (result.code !== 200) {
        throw new Error(result.message || "注册失败");
      }
    },
    // 登录的异步action
    async login({ commit }, { mobile, password }) {
      const result = await reqLogin(mobile, password);
      if (result.code === 200) {
        const userInfo = result.data;
        // 触发mutations调用 保存信息到state
        commit("RECEIVE_USER_INFO", userInfo);
        // 保存到local中
        saveUserInfo(userInfo);
      } else {
        throw new Error(result.message || "登录失败");
      }
    },
    // 退出登录
    async logout({ commit }) {
      const result = await reqLogout();
      if (result.code === 200) {
        // 触发mutations调用 清除state中的userInfo
        commit("RESET_USER_INFO");
        // 删除local中保存的userInfo
        removeUserInfo();
      } else {
        throw new Error(result.message || "退出登录失败");
      }
    },
  },
  getters: {},
};
