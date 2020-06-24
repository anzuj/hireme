<template>
  <v-card-text>This very website! 
    I took the time to research and make this project into something well maintainable. For example none of these <b>{{nr}}</b> awesome reason cards are hardcoded. Every reason is a separate component (<a href="https://github.com/anzuj/hireme/tree/master/src/components/Reasons" target="_blank">GitHub link</a>) and they're  <a href="https://github.com/anzuj/hireme/blob/master/src/components/Reasons/globals.js" target="_blank">registered globally</a>.<br><br>
     <!-- <prism language="js">{{ js }}</prism> -->
     With a dash of Vuex magic I'm also automatically registering the number of reasons, allowing me to render them all automatically.

 <!-- <prism>{{ loop }}</prism>
<prism language="html">mounted() { 
    // generating an array of globally registered reasons to render in template
    for (let i = 1; i \<= this.$store.state.reasonsAmount; i++) {
      this.reasons.push({
        id: i,
       name: `Reason-${i}`
      });
    }
  }</prism>
  -->
 This means I can gradually add new components in the Reasons folder and they'll be displayed with no manual work. Easier for me to maintain and for others to fork/customise for their own promo pages too. <br><br>

 <b>Why is this important to you as my future employer? </b>
 It shows that I'm paying attention to quality, not just quantity of my codebase.
  </v-card-text>


</template>


<script>
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: "",
  props: [""],
  components: {},
  data: () => ({
          loop: `<div v-for="reason in reasons" :key="reason.id">
          <v-card>
            <component :is="reason.name"/>
          </v-card>
        </div>`,
js: `const requireComponent = require.context( 
  // Look for files in the current directory 
  '.',
  // Do not look in subdirectories
  false,
  // Only include "Reason-" prefixed .vue files
  /Reason-[\\w-]+\\.vue$/
)

// For each matching file name...
requireComponent.keys().forEach((fileName) => {
  // Update number of reasons in Vuex
  store.commit("INCREASE_REASON_AMOUNT")
  // Get the component config
  const componentConfig = requireComponent(fileName)
  // Get the component name
  const componentName = fileName
    // Remove the "./" from the beginning
    .replace(/^\\.\\//, '')
    // Remove the file extension from the end
    .replace(/\\.\\w+$/, '')

  // Globally register the component
  Vue.component(componentName, componentConfig.default || componentConfig)
})`,
// generate:`mounted() {
//     // generating an array of globally registered reasons to render in template
//     for (let i = 1; i <= this.$store.state.reasonsAmount; i++) {
//       this.reasons.push({
//         id: i,
//        name: `Reason-${i}`
//       });
//     }
//   }`
  }),
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
