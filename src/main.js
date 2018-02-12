import Vue from 'vue'
import vueRouter from 'vue-router'//  引入vue-router
import  '../node_modules/jquery/dist/jquery'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import routerConfig from './router/router.config'//  导入路由配置
import App from './App.vue'
import myHeader from './common/header'

Vue.use(vueRouter);
const router = new vueRouter(routerConfig);
// 注册
Vue.component({'my-header': myHeader})

new Vue({
  router,//  挂载vueRouter
  el:'#app',
  render: h => h(App)
})
