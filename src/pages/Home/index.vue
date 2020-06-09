<template>
  <div>
    <TypeNav />
    <ListContainer />
    <TodayRecommend :todays="todays" />
    <Rank />
    <Like />
    <Floor v-for="floor in floors" :key="floor.id" :floor="floor" />

    <Brand />
  </div>
</template>

<script>
import { mapState } from "vuex";
import ListContainer from "./ListContainer/ListContainer";
import TodayRecommend from "./TodayRecommend/TodayRecommend";
import Rank from "./Rank/Rank";
import Like from "./Like/Like";
import Floor from "./Floor/Floor";
import Brand from "./Brand/Brand";

export default {
  name: "Home",
  computed: {
    ...mapState({ floors: state => state.home.floors }),
    ...mapState({ todays: state => state.home.today })
  },
  components: {
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  mounted() {
    // 分发给异步action获取楼层数据
    this.$store.dispatch("getFloors");
    this.$store.dispatch("getBanners");
    this.$store.dispatch("getToday");
  }
};
</script>

<style lang="less" scoped>
</style>
