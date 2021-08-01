<template>
  <div class="footer-guide">
    <div
      class="item"
      @click="goto('/msite')"
      :class="{ on: '/msite' === $route.path }"
    >
      <i class="fa fa-home fa-lg"></i>
      <p>主页</p>
    </div>
    <div
      class="item"
      @click="goto('/search')"
      :class="{ on: '/search' === $route.path }"
    >
      <i class="fa fa-search fa-lg"></i>
      <p>搜索</p>
    </div>
    <div
      class="item"
      @click="goto('/order')"
      :class="{ on: '/order' === $route.path }"
    >
      <i class="fa fa-shopping-cart fa-lg"></i>
      <p>购物车</p>
    </div>
    <div
      class="item"
      @click="goto('/profile')"
      :class="{ on: '/profile' === $route.path }"
    >
      <i class="fa fa-user-circle-o fa-lg"></i>
      <p>我的</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterGuide",
  data() {
    return {};
  },
  components: {},
  mounted() {},
  methods: {
    goto(path) {
      this.$router.replace(path);
    },
  },
};
</script>

<style  scoped>
.footer-guide {
  width: 100%;
  height: 49px;
  background-color: f6f6f6;
  box-shadow: 0px -1px 1px rgba(150, 150, 150, 0.08);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  text-align: center;
  align-content: center;
  align-items: center;
}

.item {
  margin: 5px;
  color: #999;
  flex: 1;
}

.item i {
  margin-top: 15px;
}
.item p {
  font-size: 12px;
  margin-top: 2px;
}
.on {
  /* background-color: #009273; */
  color: #009273;
}
</style>