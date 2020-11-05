import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import StudentsIndex from "../views/StudentsIndex.vue";
import StudentsShow from '../views/StudentsShow.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/students",
    name: "students-show",
    component: StudentsShow,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/students",
    name: "students-index",
    component: StudentsIndex,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
