import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#4ba4c2',
        secondary: '#426d96',
        accent: '#8c9eff',
        error: '#b71c1c',
      },
    },
  },
});
