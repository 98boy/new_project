<template>
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(item,index) in skuImageList"
        :key="item.id"
        @click="changeCurrent(index)"
      >
        <img :src="item.imgUrl" :class="{active:currentIndex===index}" />
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Swiper from "swiper";
export default {
  name: "ImageList",
  data() {
    return {
      currentIndex: 0
    };
  },
  watch: {
    skuImageList: {
      handler() {
        // 页面更新显示后创建
        this.$nextTick(() => {
          //  swiper实例对象，列表数据显示之后创建轮播才会正常显示
          new Swiper(this.$refs.swiper, {
            // direction: "vertical", // 垂直切换选项
            slidesPerView: 5, //每次显示几页
            slidesPerGroup: 5, //一次翻页

            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
            }
          });
        });
      },
      immediate: true
    }
  },
  computed: {
    ...mapGetters(["skuImageList"])
  },
  methods: {
    changeCurrent(index) {
      if (this.currentIndex === index) return;
      // 指定当前页下标
      this.currentIndex = index;
      // 通知父组件,改变下标
      this.$emit("currentChange", index);
    }
  }
};
</script>

<style lang="less" scoped>
.swiper-container {
  height: 56px;
  width: 412px;
  box-sizing: border-box;
  padding: 0 12px;

  .swiper-slide {
    // width: 56px;
    // height: 56px;

    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ccc;
      padding: 2px;
      width: 50px;
      height: 50px;
      display: block;

      &.active {
        border: 2px solid #f60;
        padding: 1px;
      }

      &:hover {
        border: 2px solid #f60;
        padding: 1px;
      }
    }
  }

  .swiper-button-next {
    left: auto;
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
    right: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: border-box;
    width: 12px;
    height: 56px;
    background: rgb(235, 235, 235);
    border: 1px solid rgb(204, 204, 204);
    top: 0;
    margin-top: 0;
    &::after {
      font-size: 12px;
    }
  }
}
</style>