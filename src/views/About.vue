<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        <v-img
          lazy-src="@/img/cv.jpg"
          max-height="200"
          max-width="200"
          src="@/img/cv.jpg"
          class="rounded-img"
        ></v-img>
      </v-col>
      <v-col cols="10" class="text-justify">
        <h2 class="text-h2">Jon Cauvin</h2>
        <p class="caption">
          Beechmount, Greenfield Rd. Dublin D13 · +353(83) 313 0767 ·
          jobs@johncvn.ovh
        </p>

        <body class="text-xl-body-1">
          Co-foundator of Family Pix during my degree, a startup project. I'm
          passionate in IT and high techologies, self-starter and team player. I
          have my Working Holiday Visa for Canada and looking for a job there.
          Do you want to know more about me ? Go here.
        </body></v-col
      >
    </v-row>
  </v-container>
</template>

<style lang="scss">
@import "node_modules/nord/src/sass/nord.scss";

.rounded-img {
  border: 6px solid $nord3;
  border-radius: 100%;
}
</style>
