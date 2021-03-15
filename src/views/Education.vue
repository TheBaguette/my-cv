<template>
  <div class="about text-left">
    <h1 class="text-md-h2 headline--text ma-5">Education</h1>
    <div v-for="item in items" :key="item" class="container">
      <div class="d-md-flex">
        <h3 class="text-md-h4 subtitle--text">· {{ item.position }}</h3>
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
        position: "ETNA School of Paris",
        company: "Master Degree, Computer Science",
        date: "October 2015 - November 2017",
        description: "System and Computer Network - Web Development",
      },
      {
        position: "University of Aix-Marseille",
        company: "Bachelor Degree, Computer Science",
        date: "September 2014 - September 2015",
        description: "System and Computer Network - Telecommunications",
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
