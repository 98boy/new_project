// 管理订单支付相关的数据

import { reqTradeInfo, reqPayInfo } from "@/api";

const state = {
  tradeInfo: {}, //交易信息对象
  payInfo: {}, //支付信息对象
};
const mutations = {
  RECEIVE_TRADE_INFO(state, { tradeInfo }) {
    state.tradeInfo = tradeInfo;
  },
  RECEIVE_PAY_INFO(state, { payInfo }) {
    state.payInfo = payInfo;
  },
};
const actions = {
  // 获取交易信息的异步action
  async getTradeInfo({ commit }) {
    const result = await reqTradeInfo();
    if (result.code === 200) {
      const tradeInfo = result.data;
      commit("RECEIVE_TRADE_INFO", { tradeInfo });
    }
  },
  async getPayInfo({ commit }, orderId) {
    const result = await reqPayInfo(orderId);
    if (result.code === 200) {
      const payInfo = result.data;
      commit("RECEIVE_PAY_INFO", { payInfo }); // 提交给mutation的是包含数据的对象
    }
  },
};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
