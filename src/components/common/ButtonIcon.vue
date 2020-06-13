<template>
  <v-btn v-bind="$attrs" outlined v-on="$listeners">
    <v-icon class="mr-2">{{ icon }}</v-icon>
    {{ text }}
  </v-btn>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component({
  name: "ButtonIcon",
  inheritAttrs: false
})
export default class ButtonIcon extends Vue {
  @Prop(String) readonly text!: string;
  @Prop(String) readonly icon!: string;
}
</script>

<style scoped></style>
