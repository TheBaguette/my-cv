<template>
  <div class="about text-left">
    <h1 class="text-md-h2 headline--text ma-5">Skills</h1>
    <h3 class="text-md-h5 headline--text ma-5">
      Programming Languages, Tools, Operating Systems & CMS
    </h3>
    <div class="container">
      <ul align="center" justify="space-around">
        <li class="d-inline" v-for="icon in icon" :key="icon">
          <v-icon size="350%" class="skill-icon">{{ icon.logo }}</v-icon>
        </li>
      </ul>
    </div>
    <h3 class="text-md-h5 headline--text ma-5">
      Workflow
    </h3>
    <ul align="center" justify="space-around">
      <li class="d-block" v-for="workflow in workflow" :key="workflow">
        <v-icon color="nord4">{{ workflow.icon }} </v-icon> {{ workflow.title }}
      </li>
    </ul>
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
  }),
};
</script>

<style lang="scss">
$breakpoint-phone: 600px;
@media (max-width: $breakpoint-phone) {
  .container {
    width: 100% !important;
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
