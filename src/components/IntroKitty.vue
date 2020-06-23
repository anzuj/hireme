<template>
  <v-container class="mb-6">
    <v-row class="text-center" no-gutters justify="center">

      <v-col cols="12" align="center">
        <div class="catContainer scale-in" >
          <div class="hire">hire<br>Anzelika!</div>
           <img src="../assets/images/chat.png" class="chat" height="120" alt="speech bubble" />
       
             <img src="../assets/images/tail.png" class="tail" height="38" alt="tail" />
          <img src="../assets/images/cup-right.png" class="cup-right" height="45" alt="cup" />
           
          <img src="../assets/images/cup-left.png" class="cup-left" height="45" alt="cup" />

             <img src="../assets/images/cat.png" class="cat" height="230" alt="cat" />
           
        </div>
      </v-col>

      <!-- <v-col cols="12">
        <v-img :src="require('../assets/images/excited.png')" class="mb-3" contain height="200" />
      </v-col>-->

      <v-col class="mt-1 mb-0 pb-0" cols="8">
        <p class="subheading font-weight-regular">
          Still not sure whether to give this Front End pixie a chance? Well, you're in the right place. Grab a cup ☕ and let me do some convincing!
        </p>
      </v-col>
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

.chat{
  position: absolute;
  z-index: 605;
  right: -50px;
  transform: rotate(4deg) 
}
.hire{
  font-family: "Freckle Face", sans-serif;
  font-size: 24px;
  position: absolute;
  width: 100px;
  height: 60px;
  line-height:1;
  background-color: transparent;
  top: 25px;
  z-index: 606;
  right: -44px;
  transform: rotate(4deg) 
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
