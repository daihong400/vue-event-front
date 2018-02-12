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
          <a class="navbar-brand" href="#">
                <span>
                  <img src="../assets/deloitte.svg" alt="">

                </span>
          </a>
        </div>
        <div class="collapse navbar-collapse" id="example-navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li class="dropdown">
              <a href="javascript:;" class="dropdown-toggle userIfo-toggle-btn" data-toggle="dropdown">
                <span></span>
                <b class="caret"></b>
              </a>
              <ul class="dropdown-menu">
                <li><router-link to="/Home">首页</router-link></li>
                <li><router-link to="/News">新闻</router-link></li>
                <li><a href="javascript:;">退出登录</a></li>
              </ul>
            </li>
            <li id="editTemplateSave">
              <a class="editTemplateSave-style" href="javascript:;">创建活动</a>
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
          title:"header"
        }
      }
    }
</script>

<style scoped>

</style>
