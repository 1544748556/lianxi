<template>
  <div id="app">
    <router-view></router-view>
    <!-- 底部导航 -->
    <FooterGuide v-if="$route.meta.showFooter" />
  </div>
</template>

<script>
import FooterGuide from "@/components/FooterGuide/FooterGuide";
export default {
  name: "App",
  components: { FooterGuide },
};
</script>

<style>
</style>
