import Vue from "vue";
import Vuex from "vuex";

import en_US from "../i18n/en-US.json";
import ko_KR from "../i18n/ko-KR.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    theme: "light",
    language: 0,
    langpack: [en_US, ko_KR]
  },
  mutations: {
    UPDATE_LOCALE(state) {
      state.language = (state.language + 1) % state.langpack.length;
    },
    UPDATE_THEME(state, data) {
      console.log("UPDATE_THEME");
      state.theme = data;
    }
  },
  actions: {
    UPDATE_THEME({ commit }, data) {
      commit("UPDATE_THEME", data);
    },
    UPDATE_LOCALE({ commit }) {
      commit("UPDATE_LOCALE");
    }
  },
  modules: {}
});
