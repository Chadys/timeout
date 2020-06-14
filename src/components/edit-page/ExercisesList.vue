<template>
  <div>
    <v-chip-group
      column
      multiple
      active-class="primary--text"
      v-model="selectedExerciseCategories"
    >
      <v-chip
        filter
        outlined
        v-for="(category, key) in exerciseCategories"
        :key="key"
        :value="category"
      >
        {{ category }}
      </v-chip>
    </v-chip-group>

    <v-list two-line>
      <template v-for="(exercise, index) in filteredExercises">
        <v-list-item :key="exercise.id" @click="addExercise(exercise.id)">
          <v-list-item-avatar rounded>
            <v-img :src="exercise.imgSideUrl" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-text="exercise.name"></v-list-item-title>
            <v-list-item-subtitle>
              {{ Array.from(exercise.categories).toString() }}
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-list-item-action-text>{{
              (exercise.defaultSecondsDuration + exercise.defaultSecondsBreak)
                | humanizeSmallDuration
            }}</v-list-item-action-text>

            <v-icon>
              mdi-playlist-plus
            </v-icon>
          </v-list-item-action>
        </v-list-item>

        <!--use negative index as key to prevent collision with id key of chip-->
        <v-divider
          v-if="index + 1 < filteredExercises.length"
          :key="-index"
        ></v-divider>
      </template>
    </v-list>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

import {
  Exercise,
  ExerciseCategories
} from "@/store/modules/exercises/exercises.type";
import humanizeSmallDuration from "@/filters/humanizeSmallDuration";
import { Emit } from "vue-property-decorator";

@Component({
  name: "ExercisesList",
  filters: {
    humanizeSmallDuration
  }
})
export default class WorkoutsList extends Vue {
  exerciseCategories = ExerciseCategories;
  selectedExerciseCategories: ExerciseCategories[] = [];

  get filteredExercises(): Exercise[] {
    return this.$store.getters.getExercisesFilteredByCategories(
      this.selectedExerciseCategories
    );
  }

  @Emit("add-exercise")
  // Emit decorator already emit function argument, no need to return anything or use argument
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  addExercise(_exerciseId: number): void {}
}
</script>

<style scoped></style>
