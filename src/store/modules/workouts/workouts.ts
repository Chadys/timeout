import { Module } from "vuex";

import {
  OPERATIONS,
  SelectedExercise,
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
    },
    [OPERATIONS.ADD_EXERCISE](
      state,
      payload: { workoutId: number; selectedExercise: SelectedExercise }
    ) {
      const workout = state.workoutsMap.get(payload.workoutId);
      if (workout != null) {
        workout.addExercise(payload.selectedExercise);
      }
    },
    [OPERATIONS.REMOVE_EXERCISE](
      state,
      payload: { workoutId: number; exerciseIndex: number }
    ) {
      const workout = state.workoutsMap.get(payload.workoutId);
      if (workout != null) {
        workout.removeExercise(payload.exerciseIndex);
      }
    },
    [OPERATIONS.EDIT_EXERCISE](
      state,
      payload: {
        workoutId: number;
        exerciseIndex: number;
        secondsDuration: number;
        secondsBreak: number;
      }
    ) {
      const workout = state.workoutsMap.get(payload.workoutId);
      if (workout != null) {
        workout.editExercise(
          payload.exerciseIndex,
          payload.secondsDuration,
          payload.secondsBreak
        );
      }
    },
    [OPERATIONS.MOVE_EXERCISE](
      state,
      payload: {
        workoutId: number;
        oldExerciseIndex: number;
        newExerciseIndex: number;
      }
    ) {
      const workout = state.workoutsMap.get(payload.workoutId);
      if (workout != null) {
        workout.moveExercise(
          payload.oldExerciseIndex,
          payload.newExerciseIndex
        );
      }
    },
    [OPERATIONS.DELETE_WORKOUT](state, payload: { workoutId: number }) {
      state.workoutsMap.delete(payload.workoutId);
    }
  },
  actions: {
    [OPERATIONS.NEW_WORKOUT]({ state, commit }): number {
      commit(OPERATIONS.NEW_WORKOUT);
      return state.lastId;
    },
    [OPERATIONS.ADD_EXERCISE](
      { commit, rootState },
      payload: { workoutId: number; exerciseId: number }
    ) {
      const exercise = rootState.exercises.exercisesMap.get(payload.exerciseId);
      if (exercise != null) {
        const selectedExercise = {
          exerciseId: payload.exerciseId,
          secondsDuration: exercise.defaultSecondsDuration,
          secondsBreak: exercise.defaultSecondsBreak
        };
        commit(OPERATIONS.ADD_EXERCISE, {
          workoutId: payload.workoutId,
          selectedExercise
        });
      }
    }
  }
};

export default moduleWorkouts;
