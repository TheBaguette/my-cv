<template>
  <div class="about text-left">
    <h1 class="text-md-h2 headline--text ma-5">Interest</h1>
    <section class="ma-5">
      <p class="font-weight-regular">
        I enjoy most of my time being outdoors. I enjoy
        <b>free climbing</b> (indoors or outdoors) and pratice slackline.
        <br />
        When forced indoors, I follow a number of <b>sci-fi</b> and
        <b>fantasy</b> genre movies, TV shows and video games. I spend a large
        amount of my free time exploring the latest technology advancements by
        listening <b>podcasts</b> or by visiting <b>website</b>.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "Experience",
  data: () => ({
    icon: [
      {
        title: "html5",
        logo: "mdi-language-html5",
      },
      {
        title: "css3",
        logo: "mdi-language-css3",
      },
      {
        title: "javascript",
        logo: "mdi-language-javascript",
      },
      {
        title: "jira",
        logo: "mdi-jira",
      },
      {
        title: "npm",
        logo: "mdi-npm",
      },
      {
        title: "github",
        logo: "mdi-github-face",
      },
      {
        title: "slack",
        logo: "mdi-slack",
      },
      {
        title: "google",
        logo: "mdi-google-analytics",
      },
      {
        title: "apple",
        logo: "mdi-apple",
      },
      {
        title: "linux",
        logo: "mdi-linux",
      },
      {
        title: "wordpress",
        logo: "mdi-wordpress",
      },
    ],
    workflow: [
      {
        icon: "mdi-check",
        title: "Responsive Design",
      },
      {
        icon: "mdi-check",
        title: "Cross Functional Teams",
      },
      {
        icon: "mdi-check",
        title: "Agile Development & Scrum",
      },
    ],
    items: [
      {
        title: "Climbing",
        icon: require("@/img/mountain.svg"),
      },
      {
        title: "Travis Howard",
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
      },
      {
        title: "Ali Connors",
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
      },
      {
        title: "Cindy Baker",
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
      },
    ],
  }),
};
</script>

<style lang="scss">
$breakpoint-phone: 600px;
@media (max-width: $breakpoint-phone) {
  .container {
    width: 100% !important;
    padding-left: 0%;
  }
}
.container {
  width: 100%;
}

.skill-icon {
  &:hover {
    color: var(--v-nord4-base);
  }
}
</style>
