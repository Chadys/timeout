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
    },
    [OPERATIONS.EDIT_WORKOUT_TITLE](
      state,
      payload: { workoutId: number; newTitle: string }
    ) {
      const workout = state.workoutsMap.get(payload.workoutId);
      if (workout != null) {
        workout.title = payload.newTitle;
      }
    }
  },
  actions: {
    [OPERATIONS.NEW_WORKOUT]({ state, commit }): number {
      commit(OPERATIONS.NEW_WORKOUT);
      return state.lastId;
    }
  }
};

export default moduleWorkouts;
