import Vue from "vue";
import VueRouter from "vue-router";
import About from "@/views/About.vue";
import Experience from "@/views/Experience.vue";
import Education from "@/views/Education.vue";
import Skill from "@/views/Skill.vue";
import Interest from "@/views/Interest.vue";
import Certification from "@/views/Certification.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "About",
    component: About,
  },
  {
    path: "/experience",
    name: "Experience",
    component: Experience,
  },
  {
    path: "/education",
    name: "Education",
    component: Education,
  },
  {
    path: "/skill",
    name: "Skill",
    component: Skill,
  },
  {
    path: "/interest",
    name: "Interest",
    component: Interest,
  },
  {
    path: "/certification",
    name: "Certification",
    component: Certification,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
