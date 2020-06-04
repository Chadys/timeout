<template>
  <v-app>
    <v-lazy>
      <v-navigation-drawer v-model="drawer" app>
        <v-list dense nav>
          <v-list-item link to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                Programs list
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link to="/about">
            <v-list-item-icon>
              <v-icon>mdi-plus-box-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                New program
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-lazy>

    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link
          tag="h1"
          class="d-flex align-center"
          to="/"
          :style="{ cursor: 'pointer' }"
        >
          <v-img
            alt="Timeout Logo"
            :src="require('./assets/logo.png')"
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
import Vue from "vue";

export default Vue.extend({
  name: "App",

  components: {
    //
  },

  data: () => ({
    drawer: null
  })
});
</script>
