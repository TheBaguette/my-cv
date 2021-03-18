<template v-slot:activator="{ on }">
  <v-app :style="{ background: $vuetify.theme.themes[theme].nord0 }">
    <v-app-bar color="nord0" dense flat max-height="6%">
      <v-app-bar-nav-icon
        @click="drawer = true"
        class="d-flex d-sm-none"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="headline--text d-flex d-md-flex"
        >Hello there</v-toolbar-title
      >

      <v-spacer></v-spacer>
      <v-btn icon @click="linkedin" color="nord4">
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>
      <v-btn icon @click="twitter" color="nord4">
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
      <v-btn icon @click="github" color="nord4">
        <v-icon>mdi-github</v-icon>
      </v-btn>
      <v-btn v-on="on" icon color="nord8" @click="darkMode">
        <v-icon>{{ icon }}</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary color="nord1">
      <v-list nav dense>
        <v-list-item-group v-model="item" active-class="nord2">
          <v-list-item
            v-for="item in items"
            :key="item"
            :to="item.route"
            class="color--text"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon" color="nord4"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-tabs
      background-color="transparent"
      grow
      color="nord4"
      class="d-none d-sm-flex tab"
    >
      <v-tab
        v-for="item in items"
        :key="item"
        :to="item.route"
        class="color--text"
      >
        {{ item.title }}</v-tab
      >
    </v-tabs>

    <v-card
      class="mx-auto mt-10"
      align="center"
      color="nord1"
      width="90%"
      outlined
    >
      <router-view
    /></v-card>
  </v-app>
</template>

<script>
export default {
  name: "Home Page",
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
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
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
  data: () => ({
    drawer: false,
    items: [
      { title: "About", icon: "mdi-account", route: "/" },
      { title: "Experience", icon: "mdi-briefcase", route: "/experience" },
      { title: "Education", icon: "mdi-school", route: "/education" },
      { title: "Skills", icon: "mdi-code-tags", route: "/skill" },
      { title: "Interest", icon: "mdi-head-heart", route: "/interest" },
    ],
    icon: "mdi-theme-light-dark",
    iconWhite: "mdi-white-balance-sunny",
  }),
};
</script>

<style lang="scss">
.tab {
  max-height: 5%;
}
.headline--text {
  color: var(--v-nord4-base);
}
.subtitle--text {
  color: var(--v-nord10-base);
}
.color--text {
  color: var(--v-nord6-base);
}
</style>
