<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <v-img :src="require('@/assets/logo.png')" contain height="200" />
      </v-col>
    </v-row>
    <v-row class="text-center mb-4">
      <v-col>
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome Timeouter!
        </h1>

        <p class="subheading font-weight-regular">
          Looks like you don't have any registered workout yet.<br />
          Do you want to...
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-row justify="space-around">
          <ButtonImport />
          <ButtonCreate />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import ButtonImport from "@/components/home-page/ButtonImport.vue";
import ButtonCreate from "@/components/home-page/ButtonCreate.vue";

@Component({
  name: "WelcomePage",
  components: { ButtonCreate, ButtonImport }
})
export default class WelcomePage extends Vue {}
</script>

<style scoped></style>
