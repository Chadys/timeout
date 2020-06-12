import Vue from "vue";
import Vuex from "vuex";

import moduleExercises from "@/store/modules/exercises/exercises";
import moduleWorkouts from "@/store/modules/workouts/workouts";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    exercises: moduleExercises,
    workouts: moduleWorkouts
  }
});
