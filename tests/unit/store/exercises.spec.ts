import { getters } from "@/store/modules/exercises/exercises";
import {
  Exercise,
  ExerciseCategories,
  ExercisesState
} from "@/store/modules/exercises/exercises.type";

const { getExercisesFilteredByCategories } = getters;

function createDummyExercise(categories: ExerciseCategories[]): Exercise {
  const categoriesSet = new Set(categories);
  return {
    id: 0,
    imgSide: "",
    imgFront: "",
    name: "",
    isSymmetrical: false,
    defaultSecondsDuration: 0,
    defaultSecondsBreak: 0,
    tips: "",
    categories: categoriesSet
  };
}

const state: ExercisesState = {
  exercisesList: [
    createDummyExercise([ExerciseCategories.Cardio, ExerciseCategories.Arms]),
    createDummyExercise([ExerciseCategories.Legs, ExerciseCategories.Cardio]),
    createDummyExercise([ExerciseCategories.Abdo])
  ]
};

describe("exercisesCategoriesFilter", () => {
  it("filter on one category", () => {
    const result = getExercisesFilteredByCategories(state)([
      ExerciseCategories.Cardio
    ]);

    expect(result).toStrictEqual([
      state.exercisesList[0],
      state.exercisesList[1]
    ]);
  });
  it("filter on two categories", () => {
    const result = getExercisesFilteredByCategories(state)([
      ExerciseCategories.Cardio,
      ExerciseCategories.Legs
    ]);

    expect(result).toStrictEqual([state.exercisesList[1]]);
  });
  it("filter on no categories", () => {
    const result = getExercisesFilteredByCategories(state)([]);

    expect(result).toStrictEqual(state.exercisesList);
  });
});
