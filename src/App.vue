<template>
  <v-app id="app">
    <div >
      <v-row dense>
        <v-spacer></v-spacer>

        <v-btn color="teal" small class href="https://anzudev.com" target="_blank" text>
          <span class="mr-2">portfolio</span>
          <v-icon small>mdi-open-in-new</v-icon>
        </v-btn>
      </v-row>
    </div>

    <v-main>
      <IntroKitty />
    </v-main>
  </v-app>
</template>

<script>
import IntroKitty from "./components/IntroKitty";

export default {
  name: "App",

  components: {
    IntroKitty
  },

  data: () => ({
    //
  })
};
</script>

<style>

#app {
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(182, 218, 207, 0.5)),url("~@/assets/images/so-white.png");
  font-family: Montserrat, sans-serif;}


</style>
