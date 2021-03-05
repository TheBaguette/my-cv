<template>
  <v-app class="app">
    <v-card class="mx-auto" color="nord1" width="90%" outlined dark>
      <v-app-bar elevate-on-scroll color="nord1">
        <v-toolbar-title class="color--text">Hello there</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="linkedin" color="nord8">
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>
        <v-btn icon @click="twitter" color="nord8">
          <v-icon>mdi-twitter</v-icon>
        </v-btn>
        <v-btn icon @click="github" color="nord8">
          <v-icon>mdi-github</v-icon>
        </v-btn>
        <v-btn icon href="mailto:jobs@johncvn.ovh" color="nord8">
          <v-icon>mdi-email</v-icon>
        </v-btn>
      </v-app-bar>

      <v-tabs background-color="transparent" grow color="nord4">
        <v-tab
          v-for="item in items"
          :key="item"
          :to="item.route"
          class="color--text"
        >
          {{ item.title }}</v-tab
        >
      </v-tabs>
    </v-card>
    <v-card
      class="mx-auto ma-10"
      align="center"
      color="nord2"
      width="90%"
      outlined
      dark
    >
      <router-view
    /></v-card>
  </v-app>
</template>

<script>
export default {
  name: "Home Page",
  methods: {
    linkedin() {
      window.open("https://www.linkedin.com/in/johncvn/");
    },
    github() {
      window.open("https://github.com/TheBaguette");
    },
    twitter() {
      window.open("https://twitter.com/john_cvn");
    },
  },
  data: () => ({
    items: [
      { title: "About", route: "/" },
      { title: "Education", route: "/education" },
      { title: "Experience", route: "/experience" },
      { title: "Skills", route: "/skill" },
      { title: "Interest", route: "/interest" },
    ],
  }),
};
</script>

<style lang="scss">
@import "node_modules/nord/src/sass/nord.scss";

.app {
  background-color: $nord1 !important;
}
.color--text {
  color: $nord6 !important;
}
</style>
