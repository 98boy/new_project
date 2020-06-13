import { reqAddToCart, reqShopCart, reqDeleteItem, reqCheckItem } from "@/api";

const state = {
  cartList: [], //购物车购物项列表
};

const mutations = {
  RECEIVE_CART_LIST(state, cartList) {
    state.cartList = cartList;
  },
};

const actions = {
  async addToCart({ commit }, { skuId, skuNum, callback }) {
    const result = await reqAddToCart(skuId, skuNum);
    if (result.code === 200) {
      console.log("成功");
      callback();
    } else {
      console.log("失败");
      callback({ status: 1, message: "添加失败" });
    }
  },
  async addToCart2({ commit }, { skuId, skuNum }) {
    const result = await reqAddToCart(skuId, skuNum);
    if (result.code === 200) {
      return "";
    } else {
      // callback({ status: 1, message: "添加失败" });
      return "添加失败";
    }
  },
  async addToCart3({ commit }, { skuId, skuNum }) {
    const result = await reqAddToCart(skuId, skuNum);
    if (result.code === 200) {
      return "";
    } else {
      // callback({ status: 1, message: "添加失败" });
      throw new Error("添加失败333");
    }
  },
  // 购物车列表数据
  async getCartList({ commit }) {
    const result = await reqShopCart();
    if (result.code === 200) {
      const result = result.data;
      commit("RECEIVE_CART_LIST");
    }
  },
};

const getters = {};

export default {
  state,
  actions,
  mutations,
  getters,
};
