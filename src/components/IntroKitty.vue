<template>
  <v-container class="mb-6">
    <v-row class="text-center" no-gutters justify="center">
      <v-col cols="12" align="center">
        <div class="catContainer scale-in">
          <div class="hire">
            hire
            <br />Anzelika!
          </div>
          <img src="../assets/images/eyes.png" class="eyes" height="30" alt="eyes" />
          <img src="../assets/images/chat.png" class="chat" height="120" alt="speech bubble" />
          <img src="../assets/images/tail.png" class="tail" height="38" alt="tail" />
          <img src="../assets/images/cup-right.png" class="cup-right" height="45" alt="cup" />
          <img src="../assets/images/cup-left.png" class="cup-left" height="45" alt="cup" />
          <img src="../assets/images/cat-no-eyes.png" class="cat" height="230" alt="cat" />
        </div>
      </v-col>

      <v-col class="mt-1 mb-0 pb-0" cols="8">
        <p
          class="subheading font-weight-regular"
        >Still not sure whether to give this Front End pixie a chance? Well, let me do some convincing. Grab a cup ☕ and dig in to these <span class="font-weight-bold">{{reasonsAmount}}</span> reasons why I'm the one to consider!</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "IntroKitty",

  data: () => ({

  }),
  computed: {
    reasonsAmount()
    {
      return this.$store.state.reasonsAmount;
    }
  }
};
</script>

<style>
.scale-in {
  animation: scale-in 1s;
}

.catContainer {
  position: relative;
  height: 230px;
  width: 256px;
}

.chat {
  position: absolute;
  z-index: 605;
  right: -50px;
  transform: rotate(4deg);
}
.hire {
  font-family: "Freckle Face", sans-serif;
  font-size: 24px;
  position: absolute;
  width: 100px;
  height: 60px;
  line-height: 1;
  background-color: transparent;
  top: 25px;
  z-index: 606;
  right: -44px;
  transform: rotate(4deg);
}

.eyes{
  position: absolute;
  top: 50%;
  left: 36.5%;
  z-index: 606;
  transform-origin: 50%;
  animation: blink 3s infinite;
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
  animation: tail 3s infinite;
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
    transform: rotate(0);
  }
  50% {
    transform: rotate(12deg);
    right: 22%;
  }
  100% {
    transform: rotate(0);
  }
}

@keyframes scale-in {
  0% {
    transform: scale(0.9);
    opacity: 0%;
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
    opacity: 100%;
  }
}

@keyframes blink {
  0%, 100% {
        transform: scale(1, .05);
    }
    5%,
    95% {
        transform: scale(1, 1);
    }
}
</style>
