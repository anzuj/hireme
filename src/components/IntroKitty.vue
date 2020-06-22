<template>
  <v-container>
    <v-row class="text-center">
      <v-col >
        <div class="d-flex justify-center align-center">

     
        <div id="logo1">hire</div>
        <div id="logo2">ME</div>
           </div>
      </v-col>

    <v-col cols="12">
      <div class="catContainer">
        <img src="../assets/images/cat.png" class="cat" height="230" alt="cat">
         <img src="../assets/images/cup-right.png" class="cup-right" height="45" alt="cup">
        <img src="../assets/images/cup-left.png" class="cup-left" height="45" alt="cup">

      </div>

    </v-col>


      <!-- <v-col cols="12">
        <v-img :src="require('../assets/images/excited.png')" class="mb-3" contain height="200" />
      </v-col> -->

      <v-col class="mb-4">
        <p class="subheading font-weight-regular">
          All the reasons why
          <span class="font-weight-bold">YOU</span> want this front end pixie on board!
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

#logo1{
  font-family: "Sriracha", sans-serif;
  font-size: 36px;
}

#logo2{
  font-family: "Bungee", sans-serif;
  font-size: 46px;
  color: rgb(26, 167, 167);
}

.catContainer{
  position: relative
}
.cup-left{
  position: absolute;
  top: 56%;
  right: 54%;
}

.cup-right{
  position: absolute;
  top: 56%;
  right: 40%;
}
</style>
