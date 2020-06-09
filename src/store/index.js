import Vue from "vue";
import Vuex from "vuex";
// import home from "./modules/home";
// import user from "./modules/user";
// import search from "@/store/modules/search";
import modules from "./modules";
Vue.use(Vuex);

// const state = {}
const mutations = {};
const actions = {};
const getters = {};
export default new Vuex.Store({
  // state,
  mutations,
  actions,
  getters,
  // 指定vuex管理的子模块
  modules,
});
