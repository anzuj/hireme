<template>
  <v-card-text>
    I know the difference between these two:
    <v-row>
      <v-col cols="12" sm="6">
        <v-card class="demoCard pt-2">
          <v-row justify="center">
            <v-btn :ripple="false" @click="showBad=!showBad">{{showBad?"hide":"show"}}</v-btn>
            <v-img
              v-show="showBad"
              class="mt-2"
              height="120"
              contain
              src="https://media.wired.com/photos/5cdefc28b2569892c06b2ae4/master/w_2560%2Cc_limit/Culture-Grumpy-Cat-487386121-2.jpg"
            ></v-img>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card class="demoCard pt-2">
          <v-row justify="center">
            <v-btn :ripple="false" @click="showGood=!showGood">{{showGood?"hide":"show"}}</v-btn>
            <v-fade-transition>
            <v-img
              v-show="showGood"
              class="mt-2"
              height="120"
              contain
              src="https://i.pinimg.com/474x/bf/f5/d0/bff5d074d399bdfec6071e9168398406.jpg"
            ></v-img>
            </v-fade-transition>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-card-text>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: "",
  props: [""],
  components: {},
  data: () => ({
    showBad: false,
    showGood: false
  }),
  methods: {},
  computed: {
    nr() {
      return this.$store.state.reasonsAmount;
    }
  }
};
</script>

<style>
.demoCard {
  height: 200px;
  background-image: linear-gradient(135deg, #5991ce 10%, #0e5cad 100%);
}
</style>