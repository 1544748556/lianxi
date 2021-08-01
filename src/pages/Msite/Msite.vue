<template>
  <div class="msite">
    <!-- 头部 -->
    <NavBar>
      <!-- 左边 -->
      <div class="left" slot="left">
        定位
        <i class="fa fa-location-arrow fa-lg"></i>
      </div>
      <!-- 中间 -->
      <div slot="center" class="center">
        <input placeholder="美食/奶茶/特色风情" type="text" />
      </div>
      <!-- 右边 -->
      <div slot="right">
        <router-link class="no" to="/search"
          ><i class="fa fa-search fa-lg"></i
        ></router-link>
      </div>
    </NavBar>
    <!-- 轮播 -->
    <Swiper />
    <!-- 商家列表 -->
    <ShopList />
  </div>
</template>

<script>
// 头部引入
import NavBar from "@/components/navbar/NavBar";
// 滑动引入
import Swiper from "@/components/Swiper/Swiper";
// 商家列表引入
import ShopList from "@/components/ShopList/ShopList";
export default {
  components: {
    NavBar,
    Swiper,
    ShopList,
  },

  name: "Msite",
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped >
.fa-search {
  color: #e4e4d9;
}
</style>