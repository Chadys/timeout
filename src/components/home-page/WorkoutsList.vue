<template>
  <div>
    <v-list class="limited-width">
      <v-list-item
        two-line
        v-for="workout in workoutsMap.values()"
        :key="workout.id"
      >
        <v-list-item-content>
          <v-list-item-title>{{ workout.title }}</v-list-item-title>
          <v-list-item-subtitle>{{
            workout.timeInSeconds | humanizeSmallDuration
          }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action class="d-inline">
          <v-btn icon class="mr-2">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn icon class="mr-2">
            <v-icon>mdi-download</v-icon>
          </v-btn>
          <v-btn icon class="mr-2" color="accent">
            <v-icon>mdi-play</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-container>
      <v-row justify="space-around">
        <ButtonImport />
        <ButtonCreate />
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import ButtonCreate from "@/components/home-page/ButtonCreate.vue";
import ButtonImport from "@/components/home-page/ButtonImport.vue";
import humanizeSmallDuration from "@/filters/humanizeSmallDuration";
import { Workout } from "@/store/modules/workouts/workouts.type";

@Component({
  name: "WorkoutsList",
  components: { ButtonCreate, ButtonImport },
  filters: {
    humanizeSmallDuration
  }
})
export default class WorkoutsList extends Vue {
  get workoutsMap(): Map<number, Workout> {
    return this.$store.state.workouts.workoutsMap;
  }
}
</script>

<style scoped>
.limited-width {
  max-width: 600px;
}
</style>
