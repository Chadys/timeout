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
          Workout not found
        </h2>
      </v-col>
    </v-row>

    <template v-else>
      <v-row align="center">
        <v-col cols="4" class="text-center">
          <h3>Available exercises</h3>
        </v-col>
        <v-col cols="4" offset="2">
          <v-text-field
            color="default"
            class="text-h3"
            placeholder="Workout Title"
            :value="workout.title"
            @input="updateTitle($event)"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <ExercisesList @add-exercise="addExercise($event)" />
        </v-col>
      </v-row>
      <v-row justify="end">
        <ButtonDelete class="mr-12 pa-6" :workoutId="workoutId" />
        <ButtonDownload class="mr-12 pa-6" />
        <ButtonRun class="mr-12 pa-6" />
      </v-row>
    </template>
  </v-container>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import { Prop } from "vue-property-decorator";

import { OPERATIONS, Workout } from "@/store/modules/workouts/workouts.type";
import ExercisesList from "@/components/edit-page/ExercisesList.vue";
import ButtonDelete from "@/components/edit-page/ButtonDelete.vue";
import ButtonDownload from "@/components/edit-page/ButtonDownload.vue";
import ButtonRun from "@/components/edit-page/ButtonRun.vue";

@Component({
  name: "EditWorkout",
  components: { ButtonRun, ButtonDownload, ButtonDelete, ExercisesList }
})
export default class WorkoutsList extends Vue {
  // TODO better mobile presentation in template
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

  addExercise(exerciseId: number) {
    this.$store.dispatch(OPERATIONS.ADD_EXERCISE, {
      workoutId: this.workoutId,
      exerciseId
    });
  }
}
</script>

<style scoped></style>
