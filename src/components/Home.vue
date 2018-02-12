<template>
  <div>
    <!--首页banner-->
    <!--<div class="index-banner text-center">-->
      <!--<h2>-->
        <!--<span class="deloitte-green">活动分析</span>-->
        <!--系统-->
      <!--</h2>-->
      <!--<p>善数不用筹策，有理有据，成就不凡</p>-->
    <!--</div>-->
    <app-banner :listImg="listImg"></app-banner>
    <!--首页主要内容-->
    <div class="index-content-wrap">
      <div class="product-view-container">
        <h3>产品一览</h3>
        <p class="product-view-title-underline"></p>
      </div>
      <div class="container index-content">
        <div class="row">
          <div class="col-md-4 text-center index-content-left-img-wrap">
            <img class="index-content-left-img" src="../assets/RadarMap.png" alt="">
          </div>
          <div class="col-md-4">
            <a href="#createActivity">
              <div class="index-content-unit text-center">
                            <span>

                            </span>
                <h3>创建活动</h3>
                <p>简单易操作，可视化创建丰富营销活动</p>
              </div>
            </a>
            <a href="#usernameCardManage">
              <div class="index-content-unit text-center">
                            <span>

                            </span>
                <h3>名牌管理</h3>
                <p>客户报名信息一键生成待打印名牌，省时省力</p>
              </div>
            </a>
          </div>
          <div class="col-md-4">
            <a href="#analysisManage">
              <div class="index-content-unit text-center">
                <span>

                </span>
                <h3>活动管理</h3>
                <p>一站式管理，二维码、URL便捷投放宣传</p>
              </div>
            </a>
            <a href="#statisticalAnalysis">
              <div class="index-content-unit text-center">
                <span>

                </span>
                <h3>统计分析</h3>
                <p>实时监测活动效果数据，查询导出真方便</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Banner from './banner.vue'
  import a from '../assets/aasBanner.png'
  import b from '../assets/RadarMap.png'
    export default {
        name: "home",
      data() {
        return {
          listImg: [{
            url: a
          }, {
            url: b
          }]
        }
      },
      components: {
        'app-banner': Banner
      },
        computed: {

        },
        methods: {
          goBack () {
            window.history.length > 1
              ? this.$router.go(-1)
              : this.$router.push('/')
          }
        }
    }
</script>

<style scoped>
  body {
    width: 100%;
    padding-top: 58px;
    font-family: ﻿MicrosoftYaHei;
  }

  img {
    display: inline-block;
  }

  h1,h2,h3,h4,h5,p {
    margin: 0;
    color: #000000;
  }

  .clear {
    clear: both;
  }

  .deloitte-green {
    color: #03b02a;
  }

  /*副导航*/

  .nav-attached span{
    color: #ffffff;
    line-height: 40px;
  }

  .nav-attached i {
    color: #43b02a;
    line-height: 40px;
  }
  /*副导航END*/

  .index-content-wrap {
    width: 100%;
    padding-bottom: 195px;
    background-color: #e8eae9;
  }

  .container.index-content {
    padding: 0;
    background-color: #ffffff;
  }

  .index-content>.row>.col-md-4{
    padding: 0;
    height: 387px;
  }

  .index-content-left-img{
    padding: 0;
    width: 400px;
    height: 387px;
  }

  .index-content-unit {
    width: 100%;
    height: 193px;
    background-color: #ffffff;
    padding: 30px 0 33px 0;
    border: 1px solid #e8eae9;
  }

  .index-content-unit:hover {
    background-color: #7bc869;
    color: #ffffff;
  }

  .index-content-unit svg {
    width: 70px;
    height: 70px;
  }

  .index-content-unit>h3 {
    font-size: 18px;
    margin: 0;
    padding-top: 8px;
  }

  .index-content-unit>p {
    font-size: 14px;
    padding-top: 9px;
  }

  .common-footer {
    width: 100%;
    height: 40px;
    background-color: rgba(83, 86, 90, 1);
  }

  .common-footer p {
    line-height: 40px;
    color: #999999;
    margin-bottom: 0;
  }

  .index-content a {
    color: #000000;
  }

  .index-content a:hover {
    color: #000000;
    text-decoration:none;
  }

  .dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus {
    background: #7bc869;
    color: #ffffff;
  }

  .navbar-nav > li > a {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .dropdown-menu > li > a {
    padding: 15px 20px;
  }

  .index-banner {
    padding-top: 65px;
    max-width: 1920px;
    height: 240px;
    background: url("../assets/aasBanner.png") no-repeat center center;
  }

  .index-banner h2 {
    font-size: 48px;
    padding-bottom: 31px;
  }

  .index-banner p {
    font-size: 30px;
  }

  .index-banner h2, .index-banner p {
    color: #ffffff;
    margin: 0;
  }


  @media (max-width: 767px) {
    .index-content-wrap {
      padding-top: 0;
    }

    .index-content-left-img-wrap {
      background-color: #000000;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    .index-content-left-img-wrap {
      background-color: #000000;
    }
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    .index-content-left-img {
      width: 100%;
    }
  }
  @media (min-width: 768px) {

  }

  @media (min-width: 1200px) {

  }
  .product-view-container>h3 {
    color: #000000;
    font-weight: normal;
    margin: 0;
    padding-top: 39px;
  }

  .index-content-left-img-wrap {
    background-color: #ffffff;
  }

  .product-view-container {
    max-width: 1200px;
    height: 100px;
    margin: 0 auto;
  }

  .product-view-title-underline {
    margin: 0;
    display: inline-block;
    width: 47px;
    height: 2px;
    background-color: rgba(67, 176, 42, 1);
    margin-top: 5px;
    margin-bottom: 30px;
  }
</style>
