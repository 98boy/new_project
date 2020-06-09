<template>
  <!--banner轮播-->
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in carouselList" :key="item.id">
        <img :src="item.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from "swiper";
export default {
  name: "Carousel",
  // 声明接收数据
  props: {
    carouselList: Array, // 轮播的数组数据
    autoplay: Boolean
  },
  // 初始界面显示后执行
  mounted() {
    if (this.carouselList.length > 0) {
      this.initSwiper();
    }
  },
  watch: {
    // 监视banners的回调函数
    // carouselList(value) {
    //   this.$nextTick(() => {
    //     this.initSwiper();
    //   });
    // }
    // carouselList: {
    //   handler(value) {
    //     //   没有数据，直接结束
    //     if (this.carouselList.length === 0) return;
    //     this.$nextTick(() => {
    //       this.initSwiper();
    //     });
    //   },
    //   immediate: true //初始显示就调用一次
    // }
  },
  methods: {
    initSwiper() {
      //  swiper实例对象，列表数据显示之后创建轮播才会正常显示
      new Swiper(this.$refs.swiper, {
        // direction: "vertical", // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: this.autoplay, // 是否自动轮播

        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });
    }
  }
};
</script>

<style lang='less' scoped>
</style>
