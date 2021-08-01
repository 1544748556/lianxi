<template>
  <div class="msite_shop_list">
    <!-- 附近商家 -->
    <div class="shop_header">
      <span class="shop_header_title"
        ><i class="fa fa-shopping-bag fa=lg"></i> 附近商家</span
      >
    </div>
    <!-- 商家详情 -->
    <div class="shop_container">
      <!-- 商家 -->
      <ul class="shop_list">
        <li class="shop_li border-1px">
          <!-- shoplist左边商家图片 -->
          <div class="shop_left">
            <img class="shop_img" src="" />
          </div>
          <!-- shoplist右边详情 -->
          <div class="shop_right">
            <!-- 商家名 -->
            <div class="shop_detail_header">
              <h4 class="shop_title">锄禾日当午，汗滴禾下土</h4>
            </div>
            <!-- 评分 -->
            <div class="shop_rating_order">
              <div class="shop_rating_order_left">
                <span class="rating_section">评分：3.6</span>
                <span class="order_section">月售106单</span>
              </div>
              <div class="shop_rating_order_right">
                <span class="delivery_style delivery_left">硅谷专送</span>
                <span class="delivery_style delivery_right">准时达</span>
              </div>
            </div>
            <!-- 配送 -->
            <div class="shop_distance">
              <p class="shop_delivery_msg">
                <span>¥20起送&nbsp;</span>
                <span> <i class="fa fa-bicycle fa-lg segmentation"></i></span>
                <span>&nbsp;配送费约¥5</span>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopList",
  data() {
    return {};
  },
  components: {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';

li {
  list-style: none;
}

.msite_shop_list {
  position: relative;
  top: 20px;
  width: 100%;

  .shop_header {
    background-color: #f1f9f7;
    padding: 5px 5px 5px 25px;

    .shop_header_title {
      color: #18997d;
      font-size: 14px;
      height: 20px;
      line-height: 20px;
      border-left: 2px solid #18997d;
      padding-left: 2px;
    }
  }

  .shop_container {
    box-sizing: content-box;
    position: relative;
    left: 0;
    right: 0;
    top: 12px;
    background-color: #fcf8e3;
    padding: 15px 0px 10px 0px;
    overflow: hidden;

    .shop_list {
      height: 75px;

      .shop_li {
        height: 75px;

        .shop_left {
          position: absolute;
          top: 10px;
          left: 10px;
          width: 22%;
          height: 75px;

          .shop_img {
            display: block;
            width: 100%;
            height: 90%;
            transform: translateY(25%);
            background: #fafafa;
            border: 2px solid #f1f9f7;
            border-radius: 8px;
          }
        }

        .shop_right {
          position: absolute;
          top: 10px;
          right: -30px;
          width: 78%;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: flex-start;

          .shop_detail_header {
            flex: 1;

            .shop_title {
              text_ellipsis();
              font-weight: 700;
              color: #333;
              font-size: 14px;

              &::before {
                content: '品牌';
                display: inline-block;
                font-size: 12px;
                line-height: 12px;
                color: #333;
                background-color: #ffd930;
                padding: 3px;
                border-radius: 2px;
                margin-right: 5px;
              }
            }
          }

          .shop_rating_order {
            flex: 1;

            .shop_rating_order_left {
              color: #ff6000;
              transform: scale(0.9);

              .rating_section {
                font-size: 10px;
              }

              .order_section {
                margin-left: 5px;
                font-size: 12px;
                color: #ff6000;
              }
            }

            .shop_rating_order_right {
              position: absolute;
              top: 0;
              right: 40px;

              .delivery_style {
                transform: scale(0.8);
                display: inline-block;
                font-size: 12px;
                padding: 1px;
                border-radius: 4px;
              }

              .delivery_left {
                color: #fff;
                background-color: #02a774;
                border: 1px solid #02a774;
              }

              .delivery_right {
                color: #02a774;
                background-color: #fff;
                border: 1px solid #02a774;
              }
            }
          }

          .shop_distance {
            position: absolute;
            bottom: -50px;
            right: 45px;
            flex: 1;
            font-size: 12px;

            .shop_delivery_msg {
              color: #666;
            }

            .segmentation {
              color: #18997d;
            }
          }
        }
      }
    }
  }
}
</style>