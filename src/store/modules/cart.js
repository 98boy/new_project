import { reqAddToCart } from "@/api";

const state = {};

const mutations = {};

const actions = {
  async addToCart({ commit }, { skuId, skuNum }) {
    const result = await reqAddToCart(skuId, skuNum);
    if (result.code === 200) {
      console.log("成功");
      // callback({ status: 0, message: "添加成功" });
    } else {
      console.log("失败");
      // callback({ status: 1, message: "添加失败" });
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
};

const getters = {};

export default {
  state,
  actions,
  mutations,
  getters,
};
