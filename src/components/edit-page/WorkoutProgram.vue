<template>
  <div />
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import { Workout } from "@/store/modules/workouts/workouts.type";

@Component({
  name: "WorkoutProgram"
})
export default class WorkoutProgram extends Vue {
  @Prop(Workout) readonly workout!: Workout;
}
</script>

<style scoped></style>
