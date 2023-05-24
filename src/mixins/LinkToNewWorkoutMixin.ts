import Vue from "vue";
import { OPERATIONS } from "@/store/modules/workouts/workouts.type";
import { ErrorHandler } from "vue-router/types/router";

export default class LinkToNewWorkoutMixin extends Vue {
  _goToEditWorkout(newWorkoutId: number, onAbort?: ErrorHandler): void {
    this.$router.push(
      {
        name: "EditWorkout",
        params: { workoutId: String(newWorkoutId) }
      },
      undefined,
      onAbort
    );
  }

  goToNewWorkoutEdition(): void {
    this.$store
      .dispatch(OPERATIONS.NEW_WORKOUT)
      .then((newWorkoutId: number) => {
        this._goToEditWorkout(newWorkoutId, () => {
          // we are probably already on the page, hack to force a data reload
          // TODO does not work everytime, search for a better solution
          this.$router.push({ name: "HomePage" }, () =>
            this._goToEditWorkout(newWorkoutId)
          );
        });
      });
  }
}
