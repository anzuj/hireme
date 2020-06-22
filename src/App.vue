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
          <v-sheet class="jumboCard">
            <IntroKitty />
          </v-sheet>
        </v-col>
      </v-row>

      <div class="d-flex justify-center align-center my-2">
        <v-btn v-ripple="{ class: 'red--text text--lighten-4' }" rounded depressed class="mr-2" color="rgba(255, 255, 255, 0.678)">See all reasons</v-btn>
        <v-btn v-ripple="{ class: 'red--text text--lighten-4' }" fab small depressed color="rgba(255, 255, 255, 0.678)">
          <v-icon id="random">mdi-dice-5-outline</v-icon>
        </v-btn>

        <!-- <v-avatar aria-label="See random reason" size="32" id="random" @click="randomReason">
          <img src="./assets/images/dice.svg" alt="dice" />
        </v-avatar>-->
      </div>

      <v-row justify="center" no-gutters>
        <v-col cols="12" md="10">
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
  background-image: url("https://www.transparenttextures.com/patterns/back-pattern.png"),
    linear-gradient(135deg, #fff886 10%, #f072b6 100%);
  font-family: Montserrat, sans-serif;
}

.jumboCard {
  border-radius: 120px !important;
  background-color: rgba(255, 255, 255, 0.678) !important;
}

.shake {
  animation: shake 0.5s;
}

#random {
  transition: all 0.2s ease-in-out;
}
#random:hover {
  cursor: pointer;
  animation: shake 0.4s;
}

.v-btn::before {
  background: transparent !important;
}

.v-btn:hover {
  background: white !important;
   transition: background 0.3s ease-in-out;
}

@keyframes shake {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(30deg);
  }
  100% {
    transform: rotate(0);
  }
}
</style>
