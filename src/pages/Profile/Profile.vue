<template>
  <div>
    <NavBar><div slot="center">个人中心</div></NavBar>
    <div class="profile">
      <!-- 登录注册 -->
      <section class="profile-number">
        <!-- 一级路由 -->
        <router-link to="/login" class="profile-link">
          <div class="profile_image">
            <i class="fa fa-user-circle fa-3x icon-person"></i>
          </div>
          <div class="user-info">
            <i class="fa fa-mobile">&nbsp;</i>
            <span>登录/注册</span>
          </div>
          <span class="arrow">
            <i class="fa fa-lg fa-angle-double-right"></i>
          </span>
        </router-link>
      </section>
      <!-- 余额优惠积分 -->
      <section class="profile_info_data border-1px">
        <ul class="info_data_list">
          <a href="javascript:" class="info_data_link">
            <span class="info_data_top"><span>0.00</span>元</span>
            <span class="info_data_bottom fa fa-money">&nbsp;我的余额</span>
          </a>
          <a href="javascript:" class="info_data_link">
            <span class="info_data_top"><span>0</span>个</span>
            <span class="info_data_bottom fa fa-credit-card-alt"
              >&nbsp;我的优惠</span
            >
          </a>
          <a href="javascript:" class="info_data_link">
            <span class="info_data_top"><span>0</span>分</span>
            <span class="info_data_bottom fa fa-align-right"
              >&nbsp;我的积分</span
            >
          </a>
        </ul>
      </section>
      <!-- 订单，商城，卡-->
      <section class="profile_my_order border-1px">
        <a href="javascript:" class="my_order">
          <span>
            <i class="iconfont icon-order-s"></i>
          </span>
          <div class="my_order_div">
            <span>我的订单</span>
            <span class="my_order_icon">
              <i class="fa fa-first-order"></i>
            </span>
          </div>
        </a>
        <!-- 积分商城 -->
        <a href="javascript:" class="my_order">
          <span>
            <i class="iconfont icon-jifen"></i>
          </span>
          <div class="my_order_div">
            <span>积分商城</span>
            <span class="my_order_icon">
              <i class="fa fa-reorder"></i>
            </span>
          </div>
        </a>
        <!-- 硅谷外卖会员卡 -->
        <a href="javascript:" class="my_order">
          <span>
            <i class="iconfont icon-vip"></i>
          </span>
          <div class="my_order_div">
            <span>硅谷外卖会员卡</span>
            <span class="my_order_icon">
              <i class="fa fa-address-card-o"></i>
            </span>
          </div>
        </a>
      </section>
      <!-- 服务中心 -->
      <section class="profile_my_order border-1px">
        <!-- 服务中心 -->
        <a href="javascript:" class="my_order">
          <span>
            <i class="iconfont icon-fuwu"></i>
          </span>
          <div class="my_order_div">
            <span>服务中心</span>
            <span class="my_order_icon">
              <i class="fa fa-server"></i>
            </span>
          </div>
        </a>
      </section>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/navbar/NavBar";

export default {
  name: "Profile",
  data() {
    return {};
  },
  components: { NavBar },
  mounted() {},
  methods: {},
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl';

.profile {
  .profile-number {
    .profile-link {
      clearFix();
      position: relative;
      display: block;
      background: #18997d;
      padding: 20px 10px;
      border-top: 1px solid #ddd;

      .profile_image {
        float: left;
        color: #ddd;
        margin-left: 25px;
      }

      .user-info {
        position: absolute;
        right: 50%;
        top: 40%;
        color: #ccc;
      }

      .arrow {
        position: absolute;
        right: 15px;
        top: 40%;
        color: #ccc;
      }
    }
  }

  .profile_info_data {
    height: 80px;
    background: #fff;

    .info_data_list {
      display: flex;
      flex-wrap: nowrap;
      padding-left: 0;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      text-align: center;

      .info_data_link {
        flex: 1;
        border-right: 1px solid #f1f1f1;

        .info_data_top {
          display: block;
          width: 100%;
          font-size: 14px;
          color: #333;
          padding: 15px 5px 10px;

          span {
            font-size: 30px;
            color: #f90;
            font-weight: 700;
            line-height: 30px;
          }
        }

        .info_data_bottom {
          display: inline-block;
          font-size: 14px;
          color: #666;
          font-weight: 400;
        }
      }

      .info_data_link:nth-of-type(2) {
        .info_data_top {
          span {
            color: #ff5f3e;
          }
        }
      }

      .info_data_link:nth-of-type(3) {
        border: 0;

        .info_data_top {
          span {
            color: #6ac20b;
          }
        }
      }
    }
  }

  .profile_my_order {
    top-border-1px(#e4e4e4);
    margin-top: 10px;
    background: #fff;

    .my_order {
      display: flex;
      align-items: center;
      padding-left: 15px;

      >span {
        display: flex;
        align-items: center;
        width: 20px;
        height: 20px;

        >.iconfont {
          margin-left: -10px;
          font-size: 30px;
        }

        .icon-order-s {
          color: #02a774;
        }

        .icon-jifen {
          color: #ff5f3e;
        }

        .icon-vip {
          color: #f90;
        }

        .icon-fuwu {
          color: #02a774;
        }
      }

      .my_order_div {
        width: 100%;
        border-bottom: 1px solid #f1f1f1;
        padding: 18px 10px 18px 0;
        font-size: 16px;
        color: #333;
        display: flex;
        justify-content: space-between;

        span {
          display: inline-block;
        }

        .my_order_icon {
          position: absolute;
          left: 10px;
          width: 10px;
          height: 10px;

          .icon-jiantou1 {
            color: #bbb;
            font-size: 10px;
          }
        }
      }
    }
  }
}
</style>