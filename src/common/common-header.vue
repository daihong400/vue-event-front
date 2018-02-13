<template>
  <nav class="navbar navbar-inverse navbar-fixed-top header" role="navigation" style="border-radius: 0;">
    <div class="container-fluid">
      <div class="header-container-fluid-box">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse"
                  data-target="#example-navbar-collapse">
            <span class="sr-only">切换导航</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
              <router-link class="navbar-brand" to="/Home" @click.native="changeActive = 0">
                <img src="../assets/deloitte.svg" alt="">
              </router-link>
        </div>
        <ul class="nav navbar-nav navbar-left header-major-menu">
          <li v-for="(x,index) in menulist" :class="{ active:changeActive == index }" @click="menuActive(index)">
            <router-link :to="{ path: x.name }">
              {{ x.text }}
            </router-link>
          </li>
        </ul>
        <div class="collapse navbar-collapse" id="example-navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li class="dropdown">
              <a href="javascript:;" class="dropdown-toggle userIfo-toggle-btn" data-toggle="dropdown">
                <span></span>
                <b class="caret"></b>
              </a>
              <ul class="dropdown-menu">
                <li><router-link to="/userCenter">个人中心</router-link></li>
                <li><a href="javascript:;">退出登录</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
    export default {
      data(){
        return {
          title:"header",
          menulist:[
              {
                "text":"首页",
                "name":"/Home"
              },
              {
                "text":"我的活动",
                "name":"/createActivity"
              },
              {
                "text":"二维码生成",
                "name":"/Home"
              },
              {
                "text":"创建活动",
                "name":"/EditActivity"
              }
            ],
          changeActive:0
        }
      },
      methods:{
        menuActive:function(index){
          this.changeActive = index;
        },
      }
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .navbar {
    min-height: 59px;
  }
  .container-fluid {
    max-width: 1600px;
    margin: 0 auto;

  }
  .navbar-brand {
    height: 59px;
  }
  .navbar-nav > li > a {
    line-height: 29px;
  }
</style>
