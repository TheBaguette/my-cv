<template>
  <v-container>
    <v-card class="mx-auto mt-5" align="center" color="nord1" outlined>
      <v-row>
        <v-col cols="2" class="d-none d-lg-block">
          <v-img
            lazy-src="@/img/cv.jpg"
            max-height="200"
            max-width="200"
            src="@/img/cv.jpg"
            class="img rounded-circle"
          ></v-img>
        </v-col>
        <v-col :lg="10" class="text-justify column">
          <h1 class="text-h2 headline--text">Jon Cauvin</h1>
          <p class="text-caption color--text text-left">
            Dublin D13, Ireland · +353(83) 313 0767 jobs@johncvn.ovh
          </p>
          <p class="text-md-h6 color--text">
            Co-foundator of Family Pix during my degree, a startup project. I'm
            passionate in IT and high techologies, self-starter and team player.
          </p>

          <body class="text-xl-body-1 color--text">
            <section class="mt-10">
              <h3 class="headline--text">Welcome to my Universe !</h3>
              <p class="font-weight-light">
                My name is Jonathan, I'm 28 years old and I'm passionate about
                IT. I was born in France (Marseille, South of France) and I
                decided to study computer science since 2015.<br />
                This project is started since 2019, in Dublin. I was looking for
                a job and I wanted to promote myself but with another way, so I
                decided to built a website.<br />
                You can check the first version on this website in this
                <a
                  href="https://github.com/TheBaguette/into-my-universe"
                  class="link"
                  >repository <v-icon color="nord4">mdi-github</v-icon></a
                >.
              </p>
            </section>

            <section class="mt-5 d-none d-lg-block">
              <h3 class="headline--text">And me in all this ?</h3>
              <p class="font-weight-light">
                I'm a simple guy who have a lot of preferences and morals. I'm
                doing climbing (bouldering) since 2 years ago but not in a row.
                I have stopped few times because of travelling and not enough
                money and I left my beautiful country in 2018. I travelled 4
                months in Asia and 10 months in Autralia with a Working Holiday
                Visa. I wanted to travel to open my mind and to know how people
                live in them own country. If, today, I'm in Dublin and build
                this website, it's because (in my opinion), it's important to
                <b>learn</b>, <b>discover</b> and <b>create</b>.
              </p>
            </section>
          </body>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "About",

  data: () => ({
    items: [
      {
        title: "Into My Universe v1",
        src: require("@/img/project1.png"),
        description: "Coming Soon",
      },
      {
        title: "Mailinda",
        src: require("@/img/project2.png"),
        description: "Coming Soon 2",
      },
    ],
  }),
};
</script>

<style lang="scss">
$breakpoint-phone: 600px;
@media (max-width: $breakpoint-phone) {
  .column {
    margin: 2%;
  }
}
.img {
  border: 5px solid var(--v-nord2-base);
}
.link {
  color: var(--v-nord4-base) !important;
  text-decoration: none;
}
</style>
