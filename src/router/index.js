import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入组件
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/login', componten: Login },
  { path: '/register', componten: Register }
]

const router = new VueRouter({
  routes
})

export default router
