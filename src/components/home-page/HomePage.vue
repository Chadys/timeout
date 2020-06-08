<template>
  <WelcomePage />
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import WelcomePage from "./WelcomePage.vue";

@Component({
  name: "HomePage",
  components: {
    WelcomePage
  }
})
export default class HomePage extends Vue {}
</script>

<style scoped></style>
