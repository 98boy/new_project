// 管理搜索模块
import { reqProductList } from "@/api";
const state = {
  // productList中含有trademarkList、attrsList、goodsList、total
  productList: {},
};
const mutations = {
  RECEIVE_PRODUCT_LIST(state, productList) {
    state.productList = productList;
  },
};
const actions = {
  // 获取商品列表数据的异步actions
  async getProductList({ commit }, options) {
    const result = await reqProductList(options);
    if (result.code === 200) {
      const productList = result.data;
      commit("RECEIVE_PRODUCT_LIST", productList);
    }
  },
};
const getters = {
  // 品牌列表
  trademarkList(state) {
    return state.productList.trademarkList || [];
  },
  // 属性列表
  attrsList(state) {
    return state.productList.attrsList || [];
  },
};
export default {
  state,
  mutations,
  actions,
  getters,
};
