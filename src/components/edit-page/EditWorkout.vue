<template>
  <v-container fluid>
    <v-row>
      <v-col cols="3">
        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon>mdi-arrow-left</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>workouts list</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>
    <v-row class="text-center" v-if="workout == null">
      <v-col>
        <h2 class="display-2 font-weight-bold">
          Invalid Workout
        </h2>
      </v-col>
    </v-row>

    <template v-else>
      <v-row align="center" justify="space-around">
        <v-col cols="3" class="text-center">
          <h3>Available exercises</h3>
        </v-col>
        <v-col cols="4">
          <v-text-field
            color="default"
            class="text-h3"
            placeholder="Workout Title"
            :value="workout.title"
            @input="updateTitle($event)"
          ></v-text-field>
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import { Prop } from "vue-property-decorator";

import { OPERATIONS, Workout } from "@/store/modules/workouts/workouts.type";

@Component({
  name: "EditWorkout"
})
export default class WorkoutsList extends Vue {
  @Prop(Number) readonly workoutId!: number;

  get workout(): Workout {
    return this.$store.state.workouts.workoutsMap.get(this.workoutId);
  }

  updateTitle(newTitle: string): void {
    this.$store.commit(OPERATIONS.EDIT_WORKOUT_TITLE, {
      workoutId: this.workoutId,
      newTitle
    });
  }
}
</script>

<style scoped></style>
