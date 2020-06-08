<template>
  <div>
    <Header />

    <!-- 一级路由组件显示区域 -->

    <router-view></router-view>

    <Footer v-if="!$route.meta.isHideFooter"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
// import { reqCategorysList, reqBanners, reqFloors } from "./api";
export default {
  name: "App",
  async mounted() {
    // const result = await reqCategorysList();
    // console.log("result", result);

    // const result = await reqFloors();
    // console.log("result---", result);
    // 分发给异步的action获取分类列表数据
    this.$store.dispatch("getCategorysList");
  },

  // 注册组件(局部, 当前组件可用)
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="less" scoped>
</style>
