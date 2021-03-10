<template v-slot:activator="{ on }">
  <div class="about">
    <v-btn v-on="on" color="info" small fab @click="darkMode">
      <v-icon class="mr-1">mdi-moon-waxing-crescent</v-icon>
    </v-btn>
    <v-btn v-on="on" color="info" small fab @click="darkMode">
      <v-icon color="yellow">mdi-white-balance-sunny</v-icon>
    </v-btn>
    <h1>This is an education page</h1>
    <p>lot</p>
  </div>
</template>

<script>
export default {
  name: "Home Page",
  methods: {
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
  data: () => ({}),
};
</script>
