<template>
  <v-app id="app">
    <!-- <div>
      <v-row dense>
        <v-spacer></v-spacer>

        <v-btn dark small class href="https://anzudev.com" target="_blank" text>
          <span class="mr-2">portfolio</span>
          <v-icon small>mdi-open-in-new</v-icon>
        </v-btn>
      </v-row>
    </div> -->

    <v-main id="content">
      <v-row justify="center" no-gutters class="ma-0 pa-0">
        <v-col cols="12" md="10" class="ma-0 pa-0">
          <v-sheet class="jumboCard-top">
            <IntroKitty />
          </v-sheet>
        </v-col>
      </v-row>

<!-- buttons -->
<div align="center" class="mt-n7 mb-4">
<v-card class="buttons rounded-xl" max-width="250" flat color="accent lighten-3">
   <div class="d-flex justify-space-between align-center my-2">
        <v-btn v-ripple="{ class: 'red--text text--lighten-4' }" rounded depressed class="mr-2" text>See all reasons</v-btn>
        <v-btn v-ripple="{ class: 'red--text text--lighten-4' }" fab small depressed class="mr-2" text>
          <v-icon id="random">mdi-dice-5-outline</v-icon>
        </v-btn>
      </div>
</v-card>
</div>
<!-- /buttons -->

  
      <v-row justify="center" no-gutters >
        <v-col cols="12" md="10" >
          <!-- <v-sheet class="jumboCard-bottom" height="100vh"> -->
            <ReasonsContainer />
          <!-- </v-sheet> -->
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
    /* background-repeat:repeat; */
    /* background-size: cover; */
    /* background-position: fixed; */
  font-family: Montserrat, sans-serif;

}
/* 
#content{
    display: flex !important;
  height: 100vh !important;
}

#bottom{
  flex-grow: 1 !important;
} */

.jumboCard-top, .jumboCard-bottom{
  background-color: rgba(255, 255, 255, 0.678) !important;
  box-shadow: 0px 0px 20px 8px rgba(150, 35, 90, 0.17) !important;
}

.jumboCard-top {
  border-bottom-left-radius: 150px !important;
  border-bottom-right-radius: 150px !important;

}

/* .jumboCard-bottom {
  border-top-left-radius: 50px !important;
  border-top-right-radius: 50px !important;
} */

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

.v-btn{
  transition: all 0.15s linear;
}
.v-btn:hover {
  color: rgb(172, 87, 101) !important;
  font-weight: bold;
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


@media only screen and (max-width: 600px) {
.jumboCard-top {
  border-bottom-left-radius: 50px !important;
  border-bottom-right-radius: 50px !important;

}

/* .jumboCard-bottom {
  border-top-left-radius: 50px !important;
  border-top-right-radius: 50px !important;
} */

}
</style>
