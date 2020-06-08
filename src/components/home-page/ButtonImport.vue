<template>
  <ButtonIcon :text="'Import File'" :icon="'mdi-file-plus-outline'" />
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import ButtonIcon from "@/components/common/ButtonIcon.vue";

@Component({
  name: "ButtonImport",
  components: { ButtonIcon }
})
export default class ButtonImport extends Vue {}
</script>

<style scoped></style>
