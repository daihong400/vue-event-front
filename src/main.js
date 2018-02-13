import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import vueRouter from 'vue-router'//  引入vue-router
import  '../node_modules/jquery/dist/jquery'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import routerConfig from './router/router.config'//  导入路由配置
import App from './App.vue'

Vue.use(vueRouter);
Vue.use(ElementUI);
const router = new vueRouter(routerConfig);

new Vue({
  router,//  挂载vueRouter
  el:'#app',
  render: h => h(App)
})
