<template>
  <v-card-text>This very website! 
    I took the opportunity to create something truly well maintainable and code as DRY as possible. None of these <b>{{nr}}</b> awesome reason cards are hardcoded

  </v-card-text>


</template>


<script>
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: "",
  props: [""],
  components: {},
  data: () => ({}),
  methods: {},
  computed: {
    nr(){
      return this.$store.state.reasonsAmount
    }
  }
};
</script>

<style>
code {
  font-weight: 400 !important;
}
</style>
