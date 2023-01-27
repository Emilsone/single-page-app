/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Post from "../views/Post.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
   
  },

  {
    path: "/post",
    name: "Post",
    // eslint-disable-next-line no-undef
    component: Post,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
