<template>
      <div class="banner-bg" :style="{ backgroundImage: 'url(' + listImg.url + ')' }">
        <div class="banner-text">
          <h2><span>活动</span>管理数据分析</h2>
          <p>善数不用筹策，有理有据，成就不凡</p>
        </div>
      </div>
</template>

<script>
  // import Swiper from '../../node_modules/swiper/dist/js/swiper.js';
  // import '../../node_modules/swiper/dist/css/swiper.min.css';

  export default {
    props: ['listImg'],
    mounted() {//插件初始化钩子函数

    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @deloitte-text-green: #03b02a;
  @text-white: #ffffff;
  h2 {
    margin: 0;
  }
  .banner-bg {
    cursor: default;
    width: 100%;
    height: 500px;
    text-align: center;
    background-repeat: no-repeat;
    background-size: cover;
    .banner-text {
      padding-top: 99px;
      color: @text-white;
      h2 {
        font-size: 48px;
        padding-bottom: 26px;
        span {
          color: @deloitte-text-green;
        }
      }
      p {
        font-size: 30px;
      }
    }
  }

</style>
