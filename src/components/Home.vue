<template>
  <div>
    <!--banner-->
    <app-banner :listImg="listImg"></app-banner>
    <!--首页主要内容-->
    <div class="home-menu-table-wrap">
      <table class="table table-bordered home-menu-table">
        <tbody>
        <tr>
          <td class="paddingClear" rowspan="2">
            <img class="index-content-left-img" src="../assets/RadarMap.png" alt="">
          </td>
          <td>
            <router-link to="CreateActivity">
              <h3>创建活动</h3>
              <p>简单易操作，可视化创建丰富营销活动</p>
            </router-link>
          </td>
          <td>
            <h3>活动管理</h3>
            <p>一站式管理，二维码、URL便捷投放宣传</p>
          </td>
        </tr>
        <tr>
          <td>
            <h3>名牌管理</h3>
            <p>客户报名信息一键生成待打印名牌，省时省力</p>
          </td>
          <td>
            <h3>统计分析</h3>
            <p>实时监测活动效果数据，查询导出真方便</p>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="step-list-wrap">
      <div class="step-list text-center">
        <div class="row">
          <div class="col-xs-6 col-md-3">
            <a href="#" class="">
              step1
            </a>
          </div>
          <div class="col-xs-6 col-md-3">
            <a href="#" class="">
              step1
            </a>
          </div>
          <div class="col-xs-6 col-md-3">
            <a href="#" class="">
              step1
            </a>
          </div>
          <div class="col-xs-6 col-md-3">
            <a href="#" class="">
              step1
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import  Banner from './banner.vue'
  import a from '../assets/aasBanner.png'

  export default {
    name: "home",
    data() {
      return {
        listImg: {
          url: a
        }
      }
    },
    components: {
      'app-banner': Banner
    },
    computed: {},
    methods: {
      goBack() {
        window.history.length > 1
          ? this.$router.go(-1)
          : this.$router.push('/')
      }
    },
    mounted: function () {
      $('.home-menu-table td').hover(function () {
        $(this).find('h3,p').css('color', '#ffffff');
      }, function () {
        $(this).find('h3,p').css('color', '#000000');
      });
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  body {
    width: 100%;
    padding-top: 59px;
    font-family: ﻿MicrosoftYaHei;
  }

  img {
    display: inline-block;
  }

  h1, h2, h3, h4, h5, p {
    margin: 0;
    color: #000000;
  }

  a {
    text-decoration: none;
  }

  .clear {
    clear: both;
  }

  .deloitte-green {
    color: #03b02a;
  }

  /*副导航*/

  .nav-attached span {
    color: #ffffff;
    line-height: 40px;
  }

  .nav-attached i {
    color: #43b02a;
    line-height: 40px;
  }

  /*副导航END*/

  .index-content-left-img {
    padding: 0;
    width: 400px;
    height: 387px;
  }

  .index-content-unit svg {
    width: 70px;
    height: 70px;
  }

  .index-content-unit > h3 {
    font-size: 18px;
    margin: 0;
    padding-top: 8px;
  }

  .index-content-unit > p {
    font-size: 14px;
    padding-top: 9px;
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
    text-decoration: none;
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

  }

  @media (min-width: 768px) and (max-width: 991px) {

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

  .product-view-container > h3 {
    color: #000000;
    font-weight: normal;
    margin: 0;
    padding-top: 39px;
  }

  .home-menu-table-wrap {
    height: 197px;
  }

  .home-menu-table {
    position: relative;
    top: -192px;
    display: block;
    margin: 0 auto;
    max-width: 1200px;
    background: #ffffff;
    border: 1px solid #696;
    -webkit-box-shadow: #666 0 0 10px;
    -moz-box-shadow: #666 0 0 10px;
    box-shadow: #666 0 0 10px;
  }

  .home-menu-table td {
    text-align: center;
    width: 400px;
    height: 192px;
    padding: 30px 20px;
    cursor: pointer;
  }

  .home-menu-table td:hover {
    background: #7bc869;
    color: #ffffff;
  }

  .home-menu-table td p {
    font-size: 14px;
    padding-top: 9px;
  }

  .home-menu-table td h3 {
    font-size: 18px;
    margin: 0;
    padding-top: 8px;
  }

  .table-bordered {
    border: 0;
  }

  .home-menu-table td.paddingClear {
    padding: 0;
  }

  .step-list-wrap {
    margin-top: 89px;
    width: 100%;
    background: #e8eae9;
    height: 380px;
    padding-top: 205px;
    .step-list {
      max-width: 1200px;
      margin: 0 auto;
    }
  }


</style>
