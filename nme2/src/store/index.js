import Vue from "vue";
import Vuex from "vuex";

import en_US from "../i18n/en-US.json";
import ko_KR from "../i18n/ko-KR.json";

import { publications } from "./publications.js";
import { projects } from "./projects.js";

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
        name: "Publication",
        icon: "menu_book",
        path: "publication"
      },
      {
        name: "Contact",
        icon: "alternate_email",
        path: "contact"
      }
    ],
    calendar: { total: 0, contributions: {} },
    publicationTab: {
      publications: publications,
      publicationFilter: {
        0: true,
        1: true,
        2: true,
        3: true
      }
    },
    projectTab: {
      projects: projects,
      languageFilter: {}
    }
  },
  getters: {
    calendar(state) {
      return state.calendar;
    },
    todayCommit(state) {
      let lastWeek =
        state.calendar.contributions[state.calendar.contributions.length - 1];
      return lastWeek[lastWeek.length - 1].count > 0;
    },
    lang(state) {
      return state.langpack[state.language];
    },
    publicationAll(state) {
      return state.publicationTab.publications.data
        .filter((x, i) => state.publicationTab.publicationFilter[i])
        .flatMap(x => x);
    },
    publicationFilters(state) {
      return Object.values(state.publicationTab.publicationFilter).map(
        (x, i) => {
          return {
            title: state.langpack[state.language].Publications.category[i],
            enabled: x
          };
        }
      );
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
    },
    UPDATE_PUBLICATION_FILTER(state, data) {
      state.publicationTab.publicationFilter[data] = !state.publicationTab
        .publicationFilter[data];
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
    },
    UPDATE_PUBLICATION_FILTER({ commit }, data) {
      commit("UPDATE_PUBLICATION_FILTER", data);
    }
  },
  modules: {}
});
