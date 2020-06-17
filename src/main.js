import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import TypeNav from "./components/TypeNav";
import store from "./store";
import "@/mock/mockServer"; //引入加载
import Carousel from "./components/Carousel";
import Pagination from "./components/Pagination";
import "./validate";
import * as API from "@/api";
// 将API对象保存待Vue原型上
Vue.prototype.$API = API;
// 注册全局组件
Vue.component("TypeNav", TypeNav);
Vue.component("Carousel", Carousel);
Vue.component("Pagination", Pagination);
new Vue({
  beforeCreate() {
    // 全局事件总线
    Vue.prototype.$bus = this;
  },
  // el: '#app',
  render: (h) => h(App),
  router, // 配置路由器  ==> 所有的组件都可以通过$router属性得到路由器对象
  store, //注册vuex的store ==> 所有的组件都可以通过$state属性
}).$mount("#app");
