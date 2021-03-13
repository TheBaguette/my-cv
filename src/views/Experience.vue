<template>
  <div class="about text-left">
    <h1 class="text-md-h2 headline--text ma-5">Experience</h1>
    <div v-for="item in items" :key="item" class="container">
      <div class="d-md-flex">
        <h3 class="text-md-h4 subtitle--text">{{ item.position }}</h3>
        <v-spacer></v-spacer>
        <span class="text-right subtitle--text"
          ><b>{{ item.date }}</b></span
        >
      </div>
      <p>{{ item.company }}</p>
      <div>
        <p class="mb-0">{{ item.description }}</p>
        <p v-html="item.tasks" class="font-weight-light">
          {{ item.tasks }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Experience",
  data: () => ({
    items: [
      {
        position: "Front-End Developer",
        company: "Cognizant",
        date: "January 2020 - August 2020",
        tasks: `
        - Daily development using Vue.js framework, HTML, CSS and JavaScript.<br>
        - Working in agile methodology with Jira Tools.<br>
        - Working with a Linux environment and CLI.<br>
        - Managing and updating version controls for repositories with GitHub and GitLab.<br>`,
        description:
          "Cognizant is an American multinational corporation that provides IT services, including digital, technology, consulting, and operations services.",
      },
      {
        position: "Web Implementation Analyst",
        company: "Cognizant",
        date: "August 2019 - Present ",
        tasks: `
        - Perform and verify the implementation of web based products with customers.<br>
        - Interface with advertisers and internal sales and services teams via phone, chat and video conferencing as needed.<br>
        - Give guidance, support and train customers on how to use the products.<br>`,
        description:
          "Cognizant is an American multinational corporation that provides IT services, including digital, technology, consulting, and operations services.",
      },
      {
        position: "Traveling",
        company: "Asia and Australia",
        date: "January 2018 - January 2019 ",
        tasks: `
        - Self study on <a href="https://openclassrooms.com/" target="_blank">Openclassroom</a>, online platform education.<br>`,
        description:
          "I travelled 2 months in Asia (Thailand, Vietnam, Bali, Hong-Kong, India, Sri-Lanka, Japan) to visit and 10 months in Australia (Melbourne and Brisbane) to work.",
      },
      {
        position: "Network Technician",
        company: "Econocom-Osiatis",
        date: "January 2016 - November 2017 ",
        tasks: `
        - Intervention on security, architecture and network on information system services.<br>
        - Improve security on Cisco switch hardware with Python Script.<br>`,
        description:
          "Econocom is a European group that makes digital transformation happen for companies and public organisations.",
      },
      {
        position: "Co-Foundator - Web Developer",
        company: "Family Pix",
        date: "December 2016 - November 2017",
        tasks: `
        - Daily development HTML5, CSS3 and JavaScript.<br>
        - Responsive Design.<br>
        - Working in agile methodology by using Trello, Planning Poker .<br>
        - Managing and updating version controls for repositories with GitHub and GitLab.<br>`,
        description:
          "Family Pix was a 2 years startup project, during my degree. It was a web application to share your moment with your family.",
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
  width: 95%;
}
</style>
