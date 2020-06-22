<template>
  <v-container>

    <v-sheet class="jumboCard">

  
    <v-row class="text-center">
      <v-col>
        <div class="scale-in d-flex justify-center align-center">
          <div id="logo1">hire</div>
          <div id="logo2">ME</div>
        </div>
      </v-col>

      <v-col cols="12" align="center">
        <div class="catContainer scale-in" >
       
             <img src="../assets/images/tail.png" class="tail" height="38" alt="tail" />
          <img src="../assets/images/cup-right.png" class="cup-right" height="45" alt="cup" />
           
          <img src="../assets/images/cup-left.png" class="cup-left" height="45" alt="cup" />

             <img src="../assets/images/cat.png" class="cat" height="230" alt="cat" />
           
        </div>
      </v-col>

      <!-- <v-col cols="12">
        <v-img :src="require('../assets/images/excited.png')" class="mb-3" contain height="200" />
      </v-col>-->

      <v-col class="mb-4">
        <p class="subheading font-weight-regular">
          All the reasons why you want <span class="font-weight-bold">THIS</span> front end pixie on board!
        </p>
      </v-col>
    </v-row>

  </v-sheet>
         <v-row align="center" justify="center">
          <v-btn text>See all reasons</v-btn> <v-btn fab text aria-label="See random reason" title="See random reason"><v-icon>mdi-dice-3-outline</v-icon></v-btn>
        </v-row>
   
  </v-container>
</template>

<script>
export default {
  name: "IntroKitty",

  data: () => ({})
};
</script>

<style>

.jumboCard{
  border-radius: 100px !important;
}

.scale-in{
  animation: scale-in 1s;
}

#logo1 {
  font-family: "Sriracha", sans-serif;
  font-size: 36px;
}

#logo2 {
  font-family: "Bungee", sans-serif;
  font-size: 46px;
  color: rgb(165, 60, 130);
}

.catContainer {
  position: relative;
  height: 230px;
  width: 256px;
}


.cup-left,
.cup-right {
  animation: coffee 2s infinite;
  transition: transform 0.2s ease-in-out;
  z-index: 601;
}
.cup-left {
  position: absolute;
  top: 56%;
  left: 20%;
  
}

.cup-right {
  position: absolute;
  top: 56%;
  right: 20%;
}

.tail {
  position: absolute;
  top: 77%;
  right: 20%;
  z-index: 599;
   transform-origin: left center;
  animation: tail 2.5s infinite;
}

.cat {
  position: relative;
   z-index: 600;
}


@keyframes coffee {
  0% {
    top: 56%;
  }
  50% {
    top: 50%;
  }
  100% {
    top: 56%;
  }
}

@keyframes tail {
  0% {
    transform:rotate(0);
  }
  50% {
     transform:rotate(15deg);
  }
  100% {
     transform:rotate(0);
  }
}

@keyframes scale-in {
  0% {
    transform:scale(0.9);
    opacity: 0%
  }
  50% {
     transform:scale(1.05);
  }
  100% {
    transform:scale(1);
    opacity: 100%;
  }
}

</style>
