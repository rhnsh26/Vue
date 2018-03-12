import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './App.vue'
import Data from './component/Data.vue'

const routes = [
    { path:'/data/:type' , component: Data }
]

const router = new VueRouter({
    mode:'history',
    routes:routes
})
new Vue({
    el:'#app',
    router:router,
    render: h=>h(App)
})