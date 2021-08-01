<template>
  <div>
    <NavBar>
      <div slot="center">搜索</div>
    </NavBar>
    <section class="search">
      <form class="search_form" action="#">
        <input
          type="search"
          name="search"
          placeholder="请输入商家或美食名称"
          class="search_input"
        />
        <input type="search" placeholder="查询" class="search_submit" />
      </form>
    </section>
  </div>
</template>

<script>
import NavBar from "@/components/navbar/NavBar";
export default {
  name: "Search",
  data() {
    return {};
  },
  components: { NavBar },
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" >
@import '../../common/stylus/mixins.styl';

.search { // 搜索
  width: 100%;
  height: 100%;

  .search_form {
    clearFix();
    margin-top: 45px;
    background-color: #fff;
    padding: 12px 8px;

    input {
      height: 35px;
      padding: 0 4px;
      border-radius: 2px;
      font-weight: bold;
      outline: none;

      &.search_input {
        float: left;
        width: 70%;
        border: 4px solid #f2f2f2;
        font-size: 14px;
        color: #333;
        background-color: #f2f2f2;
      }

      &.search_submit {
        float: right;
        width: 15%;
        margin-right: 10px;
        border: 2px solid #02a774;
        font-size: 12px;
        color: #fff;
        background-color: #02a774;
        text-align: center;
      }
    }
  }
}
</style>