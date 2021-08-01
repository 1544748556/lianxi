<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <!-- swiper第一页 -->
        <div class="swiper-slide">
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="" />
            </div>
            <span>甜品饮品</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="" />
            </div>
            <span>商超便利</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="" />
            </div>
            <span>美食</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="" />
            </div>
            <span>简餐</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="" />
            </div>
            <span>新店特惠</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="" />
            </div>
            <span>准时达</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="" />
            </div>
            <span>预订早餐</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="" />
            </div>
            <span>土豪推荐</span>
          </a>
        </div>
        <!-- swiper第二页 -->
        <div class="swiper-slide">
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="" />
            </div>
            <span>甜品饮品</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="" />
            </div>
            <span>商超便利</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="" />
            </div>
            <span>美食</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="" />
            </div>
            <span>简餐</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="" />
            </div>
            <span>新店特惠</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="" />
            </div>
            <span>准时达</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="" />
            </div>
            <span>预订早餐</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="" />
            </div>
            <span>土豪推荐</span>
          </a>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
// 引入滑动
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import "swiper/dist/js/swiper.min.js";
export default {
  name: "Swiper",
  data() {
    return {};
  },
  components: {},
  mounted() {
    // 轮播器配置使用
    new Swiper(".swiper-container", {
      autoplay: {
        delay: 5000, //1秒切换一次
      },
      loop: true, // 循环模式选项
      keyboard: true, //键盘控制
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
      mousewheel: true, //鼠标控制
      zoom: true, //开启缩放功能
    });
  },
  methods: {},
};
</script>

<style    lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';

a {
  text-decoration: none;
}

.swiper-container {
  height: 30vh;
  font-size: 12px;
  border-bottom: 1px solid #ddd;

  .swiper-slide {
    width: 100%;
    height: 30vh;
    display: flex;
    margin-top: auto;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    .link_to_food {
      width: 25%;

      .food_container {
        display: block;
        width: 100%;
        text-align: center;
        padding-bottom: 10px;

        img {
          display: inline-block;
          width: 50px;
          height: 50px;
        }
      }

      span {
        display: block;
        width: 100%;
        text-align: center;
        color: #666;
      }
    }
  }

  .swiper-pagination-bullet-active {
    background: #02a774;
    width: 10px;
  }
}
</style>