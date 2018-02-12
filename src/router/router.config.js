import Home from '../components/Home.vue'  // 导入组件Home
import News from '../components/News.vue'  // 导入组件News
//  export default 的好处是再导入时模块可以随便命名
export default {
  routes: [
    {path: '/home', component: Home},
    {path: '/news', component: News},
    {path: '*', redirect: '/home'}
  ]
}
