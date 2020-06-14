<template>
  <ButtonIcon :text="'Download'" :icon="'mdi-download'" />
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import ButtonIcon from "@/components/common/ButtonIcon.vue";

@Component({
  name: "ButtonDownload",
  components: { ButtonIcon }
})
export default class ButtonDownload extends Vue {}
</script>

<style scoped></style>
