<template>
  <WorkoutsList v-if="hasWorkouts" />
  <WelcomePage v-else />
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import WelcomePage from "./WelcomePage.vue";
import WorkoutsList from "@/components/home-page/WorkoutsList.vue";

@Component({
  name: "HomePage",
  components: {
    WelcomePage,
    WorkoutsList
  }
})
export default class HomePage extends Vue {
  get hasWorkouts(): boolean {
    return this.$store.state.workouts.workoutsMap.size > 0;
  }
}
</script>

<style scoped></style>
