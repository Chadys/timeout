<template>
  <ButtonIcon :text="'Create workout'" :icon="'mdi-plus'" color="primary" />
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import ButtonIcon from "@/components/common/ButtonIcon.vue";

@Component({
  name: "ButtonCreate",
  components: { ButtonIcon }
})
export default class ButtonCreate extends Vue {}
</script>

<style scoped></style>
