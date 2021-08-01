<template>
  <div>
    <NavBar><div slot="center">购物车</div></NavBar>
    <section class="order">
      <section class="order_no_login">
        <img src="../../assets/imgs/xiangzi.png" />
        <h3>登录后查看外卖订单</h3>
        <button>立即登陆</button>
      </section>
    </section>
  </div>
</template>

<script>
import NavBar from "@/components/navbar/NavBar";
export default {
  name: "Order",
  data() {
    return {};
  },
  components: { NavBar },
  mounted() {},
  methods: {},
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.order { // 订单
  width: 100%;

  .order_no_login {
    padding-top: 140px;
    width: 60%;
    margin: 0 auto;
    text-align: center;

    >img {
      width: 85px;
      height: 85px;
    }

    >h3 {
      padding: 10px 0;
      font-size: 17px;
      color: #6a6a6a;
    }

    >button {
      display: inline-block;
      background: #02a774;
      font-size: 14px;
      color: #fff;
      border: 0;
      outline: none;
      border-radius: 5px;
      padding: 10px 20px;
    }
  }
}
</style>