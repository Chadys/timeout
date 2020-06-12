import { Module } from "vuex";

import {
  ExerciseCategories,
  ExercisesState
} from "@/store/modules/exercises/exercises.type";

export const getters = {
  getExercisesFilteredByCategories(state: ExercisesState) {
    return (categories: ExerciseCategories[]) => {
      return [...state.exercisesMap.values()].filter(exercise =>
        categories.every(category => exercise.categories.has(category))
      );
    };
  }
};

const moduleExercises: Module<ExercisesState, any> = {
  state: () => ({
    exercisesMap: new Map([])
  }),
  getters
};

export default moduleExercises;
