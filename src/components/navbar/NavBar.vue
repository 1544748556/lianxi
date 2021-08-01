<template>
  <div id="nav-bar">
    <div class="nav-left"><slot name="left"></slot></div>
    <div class="nav-center"><slot name="center"></slot></div>
    <div class="nav-right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style  >
#nav-bar {
  position: relative;
  z-index: 10;
  display: flex;
  background-color: #18997d;
  height: 44px;
  line-height: 44px;
  text-align: center;
  font-size: 12px;
  color: #e4e4d9;
  font-weight: 600;
  /* border-bottom: 1px solid #eee; */
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.08);
}

.nav-left {
  width: 60px;
}
.search {
  width: 100%;
  height: 100%;
  font-size: 12px;
  border-radius: 18px;
  text-indent: 5px;
}
.center input {
  font-size: 12px;
  text-indent: 5px;
  width: 100%;
}
.left {
  font-size: 12px;
}
.nav-center {
  flex: 1;
}

.nav-right {
  width: 50px;
}
</style>
