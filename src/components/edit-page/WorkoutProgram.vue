<template>
  <v-list two-line>
    <template v-for="(selectedExercise, index) in filledProgram">
      <v-list-item :key="index">
        <v-list-item-icon>
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
          <!--          <v-icon>-->
          <!--            mdi-playlist-plus-->
          <!--          </v-icon>-->
        </v-list-item-action>
      </v-list-item>

      <!--use negative and skip zero as key to prevent collision with key of v-list-item-->
      <v-divider :key="-index - 1" />
    </template>
  </v-list>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";

import {
  SelectedExercise,
  Workout
} from "@/store/modules/workouts/workouts.type";
import { Exercise } from "@/store/modules/exercises/exercises.type";

interface FilledSelectedExercise {
  exercise: Exercise;
  secondsDuration: number;
  secondsBreak: number;
}

@Component({
  name: "WorkoutProgram"
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
}
</script>

<style scoped></style>
