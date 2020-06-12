// 管理搜索模块
import { reqProductList } from "@/api";
// import { delete } from "vue/types";
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
    // 不删除search组件中的options属性
    options = { ...options }; //对optios实现浅拷贝

    // 删除options中属性值为空的属性
    Object.keys(options).forEach((key) => {
      if (
        options[key] === "" ||
        (Array.isArray(options[key]) && options[key].length === 0)
      ) {
        delete options[key];
      }
    });
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
