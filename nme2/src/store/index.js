import Vue from "vue";
import Vuex from "vuex";

import en_US from "../i18n/en-US.json";
import ko_KR from "../i18n/ko-KR.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    theme: "light",
    language: 0,
    langpack: [en_US, ko_KR],
    navigationTabs: [
      {
        name: "Overview",
        icon: "scatter_plot",
        path: "overview"
      },
      {
        name: "Profile",
        icon: "person",
        path: "profile"
      },
      {
        name: "Project",
        icon: "laptop",
        path: "project"
      },
      {
        name: "Contact",
        icon: "alternate_email",
        path: "contact"
      }
    ],
    calendar: { total: 0, contributions: {} }
  },
  getters: {
    calendar(state) {
      return state.calendar;
    }
  },
  mutations: {
    UPDATE_LOCALE(state) {
      state.language = (state.language + 1) % state.langpack.length;
      state.navigationTabs = state.navigationTabs.map(x => {
        x.name = state.langpack[state.language].Navigation[x.path];
        return x;
      });
    },
    UPDATE_THEME(state, data) {
      state.theme = data;
    },
    UPDATE_CALENDAR(state, data) {
      state.calendar = data;
    }
  },
  actions: {
    UPDATE_THEME({ commit }, data) {
      commit("UPDATE_THEME", data);
    },
    UPDATE_LOCALE({ commit }) {
      commit("UPDATE_LOCALE");
    },
    UPDATE_CALENDAR({ commit }, data) {
      commit("UPDATE_CALENDAR", data);
    }
  },
  modules: {}
});
