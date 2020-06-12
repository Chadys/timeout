import Vue from "vue";
import Vuex from "vuex";

import moduleExercises from "@/store/modules/exercises/exercises";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    exercises: moduleExercises
  }
});
