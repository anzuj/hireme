<template>
  <v-card-text class="text-center">
I bring quality programming memes to the office!
<v-row justify="center">
  <v-col cols="8" v-for="image in images" :key="image">
    <v-img :src="image" contain width="400"></v-img>

  </v-col>
</v-row>
  </v-card-text>
</template>
<script>
export default {
  name: "",
  props: [""],
  components: {},
  data: () => ({
    images:["https://i.ibb.co/bRW7PcD/FB-IMG-1592700504521.jpg","https://i.ibb.co/wdJc4dr/when-frontend-is-ready-before-backend.jpg","https://i.ibb.co/hKwjBFY/20200623-174823.jpg", "https://i.ibb.co/9TH1YT1/20200623-174813.png" ]
  }),

 
  computed: {

  }
};
</script>