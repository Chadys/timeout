import { Module } from "vuex";

import {
  OPERATIONS,
  Workout,
  WorkoutsState
} from "@/store/modules/workouts/workouts.type";

const moduleWorkouts: Module<WorkoutsState, any> = {
  state: () => ({
    lastId: 0,
    workoutsMap: new Map()
  }),
  mutations: {
    [OPERATIONS.NEW_WORKOUT](state) {
      const workout = new Workout();
      state.lastId += 1;
      workout.id = state.lastId;
      state.workoutsMap.set(workout.id, workout);
    }
  },
  actions: {
    [OPERATIONS.NEW_WORKOUT]({ state, commit }) {
      commit(OPERATIONS.NEW_WORKOUT);
      return state.lastId;
    }
  }
};

export default moduleWorkouts;
