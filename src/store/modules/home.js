// 管理首页Home数据
import { reqCategorysList, reqBanners, reqFloors, reqToday } from "@/api";
export default {
  state: {
    categoryList: [], //分类列表
    banners: [], //广告轮播
    floors: [], //楼层数据
    today: {}, //今日推荐
  },
  mutations: {
    // 分类列表数据
    RECEIVE_CATEGORY_LIST(state, categoryList) {
      state.categoryList = categoryList.filter((item, index) => index < 15);
    },
    // 广告轮播数据
    RECEIVE_BANNERS(state, banners) {
      state.banners = banners;
    },
    // 楼层数据
    RECEIVE_FLOORS(state, floors) {
      state.floors = floors;
    },
    // 今日推荐数据
    RECEIVE_TODAYS(state, today) {
      state.today = today;
    },
  },
  actions: {
    // 广告轮播列表的异步action
    async getBanners({ commit }) {
      const result = await reqBanners();
      if (result.code === 200) {
        const banners = result.data;
        commit("RECEIVE_BANNERS", banners);
      }
    },
    // 楼层的异步action
    async getFloors({ commit }) {
      const result = await reqFloors();
      if (result.code === 200) {
        const floors = result.data;
        commit("RECEIVE_FLOORS", floors);
      }
    },
    // 异步分类列表
    async getCategorysList({ commit }) {
      const result = await reqCategorysList();
      if (result.code === 200) {
        const categoryList = result.data;
        commit("RECEIVE_CATEGORY_LIST", categoryList);
      }
    },
    // 今日推荐
    async getToday({ commit }) {
      const result = await reqToday();
      if (result.code === 200) {
        const today = result.data;
        commit("RECEIVE_TODAYS", today);
      }
    },
  },
  getters: {},
};
