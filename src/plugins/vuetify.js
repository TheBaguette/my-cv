import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    options: { customProperties: true },
    themes: {
      dark: {
        nord0: "#2e3440",
        nord1: "#3b4252",
        nord2: "#434c5e",
        nord3: "#4c566a",
        nord4: "#d8dee9",
        nord5: "#e5e9f0",
        nord6: "#eceff4",
        nord7: "#8fbcbb",
        nord8: "#88c0d0",
        nord9: "#81a1c1",
        nord10: "#5e81ac",
        nord11: "#bf616a",
        nord12: "#d08770",
        nord13: "#ebcb8b",
        nord14: "#a3be8c",
        nord15: "#b48ead",
      },
      light: {
        nord0: "#eceff4",
        nord1: "#e5e9f0",
        nord2: "#d8dee9",
        nord3: "#4c566a",
        nord4: "#434c5e",
        nord5: "#3b4252",
        nord6: "#2e3440",
        nord7: "#8fbcbb",
        nord8: "#d08770",
        nord9: "#81a1c1",
        nord10: "#88c0d0",
        nord11: "#bf616a",
        nord12: "#d08770",
        nord13: "#ebcb8b",
        nord14: "#a3be8c",
        nord15: "#b48ead",
      },
    },
  },
});
