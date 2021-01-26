import Vue from "vue";
import Router from "vue-router";
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home.vue";
import { MainRoute } from "./mainRoute.js";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    children: MainRoute
  }
];

const router = new Router({
  routes: routes
});

export default router;
