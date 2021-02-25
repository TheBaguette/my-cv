<template>
  <v-app>
    <v-container class="ma-0 pa-0">
      <v-row no-gutters>
        <v-col cols="2">
          <v-tabs vertical>
            <v-tab><router-link to="/">About</router-link></v-tab>
            <v-tab
              ><router-link to="/experience">Experiences</router-link></v-tab
            >
            <v-tab><router-link to="/education">Education</router-link></v-tab>
            <v-tab><router-link to="/skill">Skills</router-link></v-tab>
            <v-tab><router-link to="/interest">Insterests</router-link></v-tab>
            <v-tab
              ><router-link to="/certification"
                >Certifications</router-link
              ></v-tab
            >
          </v-tabs>
        </v-col>
        <v-col cols="10">
          <v-content>
            <router-view />
          </v-content>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
