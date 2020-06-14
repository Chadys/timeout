<template>
  <ButtonIcon :text="'Launch'" :icon="'mdi-play'" color="accent" />
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import ButtonIcon from "@/components/common/ButtonIcon.vue";

@Component({
  name: "ButtonRun",
  components: { ButtonIcon }
})
export default class ButtonRun extends Vue {}
</script>

<style scoped></style>
