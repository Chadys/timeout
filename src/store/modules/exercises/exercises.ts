import { Module } from "vuex";

import {
  ExerciseCategories,
  ExercisesState
} from "@/store/modules/exercises/exercises.type";

export const getters = {
  getExercisesFilteredByCategories(state: ExercisesState) {
    return (categories: ExerciseCategories[]) => {
      return state.exercisesList.filter(exercise =>
        categories.every(category => exercise.categories.has(category))
      );
    };
  }
};

const moduleExercises: Module<ExercisesState, any> = {
  state: () => ({
    exercisesList: []
  }),
  getters
};

export default moduleExercises;
