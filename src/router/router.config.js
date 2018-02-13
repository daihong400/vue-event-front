import Home from '../components/Home.vue'  // 导入组件Home
import CreateActivity from '../components/createActivity.vue'  // 导入组件News
import EditActivity from '../components/editTemplate.vue'  // 导入组件News
//  export default 的好处是再导入时模块可以随便命名
export default {
  routes: [
    {path: '/home', component: Home},
    {path: '/createActivity', component: CreateActivity},
    {path: '/editActivity', component: EditActivity},
    {path: '*', redirect: '/home'}
  ]
}
