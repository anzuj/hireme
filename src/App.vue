<template>
  <v-app id="app">
    <div>
      <v-row dense>
        <v-spacer></v-spacer>

        <v-btn dark small class href="https://anzudev.com" target="_blank" text>
          <span class="mr-2">portfolio</span>
          <v-icon small>mdi-open-in-new</v-icon>
        </v-btn>
      </v-row>
    </div>

    <v-main>
      <v-row justify="center" no-gutters class="ma-0 pa-0">
        <v-col cols="12" md="10" class="ma-0 pa-0">
          <IntroKitty />
        </v-col>

        <v-col cols="12" md="10" class="ma-0 pa-0">
             <v-sheet class="jumboCard">
          <ReasonsContainer />
           </v-sheet>
        </v-col>

      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import IntroKitty from "./components/IntroKitty";
import ReasonsContainer from "./components/ReasonsContainer";

export default {
  name: "App",

  components: {
    IntroKitty,
    ReasonsContainer
  },

  data: () => ({
    //
  })
};
</script>

<style>
#app {

background-image: url("https://www.transparenttextures.com/patterns/back-pattern.png"), linear-gradient( 135deg, #FFF886 10%, #F072B6 100%);
  font-family: Montserrat, sans-serif;
}

.jumboCard {
  border-radius: 120px !important;
}
</style>
