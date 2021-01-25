import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

window.vue = new Vue({
  components: {
    App
  },
  router,
  store,
  VueAxios,
  axios,
  template: "<App/>"
}).$mount("#app");

// createApp(App)
//   .use(store)
//   .use(router)
//   .use()
//   .mount("#app");
