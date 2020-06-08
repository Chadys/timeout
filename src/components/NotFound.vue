<template
  ><v-container>
    <v-row class="text-center">
      <v-col>
        <h1 class="display-2 font-weight-bold mb-3">
          404
        </h1>
        <p class="subheading font-weight-regular">
          Not Found
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  name: "NotFound"
})
export default class NotFound extends Vue {}
</script>

<style scoped></style>
