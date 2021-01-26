import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home.vue";

import Profile from "../components/mainpage/contents/Profile.vue";
import Contact from "../components/mainpage/contents/Contact.vue";
Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    children: [
      {
        path: "profile",
        name: "profile",
        component: Profile
      },
      {
        path: "contact",
        name: "contact",
        component: Contact
      }
    ]
  }
];

const router = new Router({
  routes: routes
});

export default router;
