<template>
  <ButtonIcon
    :text="'Delete'"
    :icon="'mdi-delete'"
    color="error"
    @click="deleteWorkout()"
  />
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import ButtonIcon from "@/components/common/ButtonIcon.vue";
import { Prop } from "vue-property-decorator";
import { OPERATIONS } from "@/store/modules/workouts/workouts.type";

@Component({
  name: "ButtonDelete",
  components: { ButtonIcon }
})
export default class ButtonDelete extends Vue {
  @Prop(Number) readonly workoutId!: number;

  deleteWorkout() {
    this.$store.commit(OPERATIONS.DELETE_WORKOUT, {
      workoutId: this.workoutId
    });
    this.$router.push({ name: "HomePage" });
  }
}
</script>

<style scoped></style>
