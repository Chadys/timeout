<template>
  <ButtonIcon
    :text="'Create workout'"
    :icon="'mdi-plus'"
    color="primary"
    @click="goToNewWorkoutEdition()"
  />
</template>

<script lang="ts">
import Component from "vue-class-component";

import ButtonIcon from "@/components/common/ButtonIcon.vue";
import LinkToNewWorkoutMixin from "@/mixins/LinkToNewWorkoutMixin";

@Component({
  name: "ButtonCreate",
  components: { ButtonIcon }
})
export default class ButtonCreate extends LinkToNewWorkoutMixin {}
</script>

<style scoped></style>
