import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    theme: "light"
  },
  mutations: {
    UPDATE_THEME(state, data) {
      console.log("UPDATE_THEME");
      state.theme = data;
    }
  },
  actions: {
    UPDATE_THEME({ commit }, data) {
      commit("UPDATE_THEME", data);
    }
  },
  modules: {}
});
