import { getters } from "@/store/modules/exercises/exercises";
import {
  Exercise,
  ExerciseCategories,
  ExercisesState
} from "@/store/modules/exercises/exercises.type";

const { getExercisesFilteredByCategories } = getters;

describe("exercisesCategoriesFilter", () => {
  function createDummyExercise(
    id: number,
    categories: ExerciseCategories[]
  ): [number, Exercise] {
    const categoriesSet = new Set(categories);
    return [
      id,
      {
        id,
        img: "",
        name: "",
        isSymmetrical: false,
        defaultSecondsDuration: 0,
        defaultSecondsBreak: 0,
        tips: "",
        categories: categoriesSet
      }
    ];
  }

  const state: ExercisesState = {
    exercisesMap: new Map([
      createDummyExercise(1, [
        ExerciseCategories.Cardio,
        ExerciseCategories.Arms
      ]),
      createDummyExercise(2, [
        ExerciseCategories.Legs,
        ExerciseCategories.Cardio
      ]),
      createDummyExercise(3, [ExerciseCategories.Abdos])
    ])
  };

  it("filter on one category", () => {
    const result = getExercisesFilteredByCategories(state)([
      ExerciseCategories.Cardio
    ]);

    expect(result).toStrictEqual([
      state.exercisesMap.get(1),
      state.exercisesMap.get(2)
    ]);
  });
  it("filter on two categories", () => {
    const result = getExercisesFilteredByCategories(state)([
      ExerciseCategories.Cardio,
      ExerciseCategories.Legs
    ]);

    expect(result).toStrictEqual([state.exercisesMap.get(2)]);
  });
  it("filter on no categories", () => {
    const result = getExercisesFilteredByCategories(state)([]);

    expect(result).toStrictEqual([...state.exercisesMap.values()]);
  });
});
