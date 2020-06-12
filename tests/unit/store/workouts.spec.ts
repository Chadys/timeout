import { Workout } from "@/store/modules/workouts/workouts.type";

describe("WourkoutClass", () => {
  let workout: Workout;

  function getListIdsInOrder(workout: Workout) {
    return workout.program.map(({ exerciseId }) => exerciseId);
  }

  beforeEach(() => {
    workout = new Workout();
    workout.addExercise({
      exerciseId: 0,
      secondsDuration: 10,
      secondsBreak: 5
    });
    workout.addExercise({
      exerciseId: 1,
      secondsDuration: 10,
      secondsBreak: 5
    });
    workout.addExercise({
      exerciseId: 2,
      secondsDuration: 30,
      secondsBreak: 6
    });
  });

  it("add exercises", () => {
    workout.addExercise({
      exerciseId: 3,
      secondsDuration: 10,
      secondsBreak: 0
    });

    expect(workout.timeInSeconds).toBe(76);
  });

  it("remove exercises", () => {
    workout.removeExercise(2);

    expect(workout.timeInSeconds).toBe(30);
  });

  it("edit exercises", () => {
    workout.editExercise(2, 20);

    expect(workout.timeInSeconds).toBe(56);
    workout.editExercise(2, undefined, 7);

    expect(workout.timeInSeconds).toBe(57);
    workout.editExercise(2, 0, 0);

    expect(workout.timeInSeconds).toBe(30);
  });

  it("move exercises", () => {
    expect(getListIdsInOrder(workout)).toStrictEqual([0, 1, 2]);

    workout.moveExercise(0, 2);
    expect(getListIdsInOrder(workout)).toStrictEqual([1, 2, 0]);

    workout.moveExercise(1, 0);
    expect(getListIdsInOrder(workout)).toStrictEqual([2, 1, 0]);

    workout.moveExercise(2, 1);
    expect(getListIdsInOrder(workout)).toStrictEqual([2, 0, 1]);
  });
});
