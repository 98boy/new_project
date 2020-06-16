/* 
管理购物车相关数据的vuex子模块
*/
import { reqShopCart, reqAddToCart, reqCheckItem, reqDeleteItem } from "@/api";

const state = {
  cartList: [], // 购物车购物项的列表
};

const mutations = {
  /* 
  接收保存购物项列表
  */
  RECEIVE_CART_LIST(state, cartList) {
    state.cartList = cartList;
  },
};

const actions = {
  // 删除单个商品
  async deleteCartItem({ commit }, skuId) {
    const result = await reqDeleteItem(skuId);

    if (result.code !== 200) {
      throw new Error(result.message || "删除商品失败");
    }
  },
  // 删除所有选中商品
  async deleteCartItems({ state, dispatch }) {
    const promises = state.cartList.reduce((pre, item) => {
      // 购物项是否选中

      if (item.isChecked === 1) {
        console.log("------------");

        pre.push(dispatch("deleteCartItem", item.skuId));
      }
      return pre;
    }, []);
    return Promise.all(promises);
  },
  /* 
  获取购物车列表数据的异步action
  */
  async getCartList({ commit }) {
    const result = await reqShopCart();
    if (result.code === 200) {
      const cartList = result.data;
      commit("RECEIVE_CART_LIST", cartList);
    }
  },
  /*是否勾选商品 */
  async checkCartItem({ commit }, { skuId, isChecked }) {
    const result = await reqCheckItem(skuId, isChecked);
    console.log(skuId);
    if (result.code !== 200) {
      throw new Error(result.message || "选中商品失败");
    }
  },
  //全选
  async checkCartItems({ commit, state, dispatch }, checked) {
    const isChecked = checked ? 1 : 0;
    let promises = [];
    // 遍历每个购物项
    state.cartList.forEach((item) => {
      // 购物项状态与目标状态不一样
      if (item.isChecked != isChecked) {
        // 分发给checkCartItem得到返回的promise对象
        const promise = dispatch("checkCartItem", {
          skuId: item.skuId,
          isChecked,
        });
        // 保存到数组中
        promises.push(promise);
      }
    });
    return Promise.all(promises);
  },
  /* 
  添加到购物车的异步action
  */
  async addToCart({ commit }, { skuId, skuNum, callback }) {
    const result = await reqAddToCart(skuId, skuNum);
    if (result.code === 200) {
      // 通知组件成功了
      callback(); // 不传参数
    } else {
      // 通知组件失败了
      callback("添加购物车失败");
    }
  },

  /* 
  添加到购物车的异步action
  */
  async addToCart2({ commit }, { skuId, skuNum }) {
    const result = await reqAddToCart(skuId, skuNum);
    // 如果请求的结果不正确, 抛出一个错误
    if (result.code !== 200) {
      // 通知组件失败了
      throw new Error("添加购物车失败"); // action函数的promise失败了, reason为error
    }
  },

  /* 
  添加到购物车的异步action
  */
  async addToCart3({ commit }, { skuId, skuNum }) {
    const result = await reqAddToCart(skuId, skuNum);
    // 如果请求的结果不正确, 抛出一个错误
    if (result.code !== 200) {
      // 通知组件失败了
      return "添加购物车失败"; // action的promise是成功的, value是errorMsg
    } else {
      // 这个else完全可以不用写
      return undefined; // action的promise是成功的, value是undefined
    }
  },
};

const getters = {
  // 选中的总数量
  totalCount(state) {
    //   let total = 0
    //   state.cartList.forEach(item => {
    //     total+=item.skuNum
    //   })

    //   return total
    return state.cartList.reduce(
      (preTotal, item, index) =>
        preTotal + (item.isChecked === 1 ? item.skuNum : 0),
      0
    );
  },

  // 选中的总价格
  totalPrice(state) {
    return state.cartList.reduce(
      (preTotal, item, index) => preTotal + item.skuNum * item.cartPrice,
      0
    );
  },
  // 是否全部选中
  isCheckAll(state) {
    return (
      state.cartList.length > 0 &&
      state.cartList.every((item, index) => item.isChecked === 1)
    );
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
