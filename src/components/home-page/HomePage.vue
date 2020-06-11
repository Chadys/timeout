<template>
  <!--  <WelcomePage />-->
  <WorkoutsList />
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
export default class HomePage extends Vue {}
</script>

<style scoped></style>
