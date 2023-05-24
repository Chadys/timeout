<template>
  <v-list two-line>
    <template v-for="(selectedExercise, index) in filledProgram">
      <v-list-item :key="index" :custom="index">
        <v-list-item-icon @click="removeExercise(index)">
          <v-btn icon>
            <v-icon color="error">mdi-close</v-icon>
          </v-btn>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{
            selectedExercise.exercise.name
          }}</v-list-item-title>
          <v-list-item-subtitle>
            {{ Array.from(selectedExercise.exercise.categories).toString() }}
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-list-item-action-text>
            {{ selectedExercise.secondsDuration | humanizeSmallDuration }}
          </v-list-item-action-text>
          <EditExerciseDialog
            :selectedExercise="{ ...selectedExercise }"
            @edit-exercise="editExercise(index, ...arguments)"
          />
        </v-list-item-action>
      </v-list-item>

      <!--use negative and skip zero as key to prevent collision with key of v-list-item-->
      <div
        v-if="index + 1 < filledProgram.length"
        :key="-index - 1"
        class="d-flex align-center"
      >
        <div class="mr-2 text-caption">
          {{ selectedExercise.secondsBreak | humanizeSmallDuration }} break
        </div>
        <v-divider></v-divider>
      </div>
    </template>
  </v-list>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Emit, Prop, Watch } from "vue-property-decorator";

import {
  SelectedExercise,
  Workout
} from "@/store/modules/workouts/workouts.type";
import { FilledSelectedExercise } from "@/store/modules/exercises/exercises.type";
import humanizeSmallDuration from "@/filters/humanizeSmallDuration";
import EditExerciseDialog from "@/components/edit-page/EditExerciseDialog.vue";

@Component({
  name: "WorkoutProgram",
  components: { EditExerciseDialog },
  filters: {
    humanizeSmallDuration
  }
})
export default class WorkoutProgram extends Vue {
  @Prop(Number) readonly workoutId!: number;

  // get program(): SelectedExercise[] {
  //   return this.$store.state.workouts.workoutsMap.get(this.workoutId)?.program;
  // }
  // workaround because component not updating correctly since Map not reactive,
  // see: https://github.com/vuejs/vue/issues/2410
  program: SelectedExercise[] = [];

  @Watch("workoutId", { immediate: true })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onWorkoutChanged(val: number, _oldVal: number) {
    const workout: Workout = this.$store.state.workouts.workoutsMap.get(val);
    this.program = workout?.program || [];
  }

  get filledProgram(): FilledSelectedExercise[] {
    const exerciseMap = this.$store.state.exercises.exercisesMap;
    return this.program.map((selectedExercise: SelectedExercise) => {
      return {
        exercise: exerciseMap.get(selectedExercise.exerciseId),
        secondsDuration: selectedExercise.secondsDuration,
        secondsBreak: selectedExercise.secondsBreak
      };
    });
  }

  @Emit("remove-exercise")
  // Emit decorator already emit function argument, no need to return anything or use argument
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  removeExercise(_exerciseIndex: number): void {}

  @Emit("edit-exercise")
  editExercise(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _exerciseIndex: number,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _secondsDuration: number,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _secondsBreak: number
    // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  ): void {}
}
</script>

<style scoped></style>
