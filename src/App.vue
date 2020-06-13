<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      dark
      disable-route-watcher
      temporary
    >
      <v-list dense nav>
        <v-list-item link to="/" @click="toggleDrawer()">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              Workouts list
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          @click="
            goToNewWorkoutEdition();
            toggleDrawer();
          "
        >
          <v-list-item-icon>
            <v-icon>mdi-plus-box-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              New workout
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="toggleDrawer()"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link
          tag="div"
          class="d-flex align-center"
          to="/"
          :style="{ cursor: 'pointer' }"
        >
          <v-img
            alt="Timeout Logo"
            :src="require('@/assets/logo.png')"
            class="shrink"
            contain
            transition="scale-transition"
            width="50"
          />

          <h1 class="display-1 font-weight-bold">
            Timeout
          </h1>
        </router-link>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Component from "vue-class-component";

import LinkToNewWorkoutMixin from "@/mixins/LinkToNewWorkoutMixin";

@Component({
  name: "App"
})
export default class App extends LinkToNewWorkoutMixin {
  drawer = false;
  toggleDrawer(): void {
    this.drawer = !this.drawer;
  }
}
</script>
