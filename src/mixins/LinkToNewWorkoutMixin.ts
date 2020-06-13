import Vue from "vue";
import { OPERATIONS } from "@/store/modules/workouts/workouts.type";

export default class LinkToNewWorkoutMixin extends Vue {
  goToNewWorkoutEdition(): void {
    this.$store.dispatch(OPERATIONS.NEW_WORKOUT).then((newWorkoutId: number) =>
      this.$router.push({
        name: "EditWorkout",
        params: { workoutId: String(newWorkoutId) }
      })
    );
  }
}
