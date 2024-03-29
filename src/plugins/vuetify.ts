import Vue from "vue";
import Vuetify, { colors } from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.red.darken1,
        secondary: colors.red.lighten3,
        accent: colors.deepPurple.lighten1
      }
    }
  }
});
