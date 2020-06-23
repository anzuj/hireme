<template>
<div>


  <v-card-text>
    <p class="mb-0"> I know that this: <v-icon small class="mdi-rotate-90">mdi-share</v-icon></p>
   
    <v-card flat color="teal" dark>
      <v-card-text>This is text has less contrast with the background and is easier on the eyes. Bacon ipsum dolor amet pancetta chislic fatback tail pastrami buffalo landjaeger jowl shank pork loin. Swine short ribs beef biltong, boudin buffalo ground round spare ribs flank brisket jerky short loin sirloin beef ribs. Pork belly tenderloin pork loin flank t-bone, shoulder biltong. Swine andouille bresaola chislic.</v-card-text>
    </v-card>

    <p class="mt-3 mb-0"> Is better than this: <v-icon small class="mdi-rotate-90">mdi-share</v-icon></p>
    <v-card flat color="black">
      <v-card-text class="red--text font-weight-medium">This is text is attacking your eyes since someone thought it was a good idea to make an "edgy" website. Bacon ipsum dolor amet pancetta chislic fatback tail pastrami buffalo landjaeger jowl shank pork loin. Swine short ribs beef biltong, boudin buffalo ground round spare ribs flank brisket jerky short loin sirloin beef ribs. Pork belly tenderloin pork loin flank t-bone, shoulder biltong. Swine andouille bresaola chislic.</v-card-text>
        </v-card>

      <p class="mt-8 mb-0"> And that actually this wins the race altogether: <v-icon small class="mdi-rotate-90">mdi-share</v-icon></p>
    <v-card flat color="teal lighten-5">
      <v-card-text class="teal--text text--darken-3">Light theme is easier on the eyes in most situations and should be chosen for longer body texts. Bacon ipsum dolor amet pancetta chislic fatback tail pastrami buffalo landjaeger jowl shank pork loin. Swine short ribs beef biltong, boudin buffalo ground round spare ribs flank brisket jerky short loin sirloin beef ribs. Pork belly tenderloin pork loin flank t-bone, shoulder biltong. Swine andouille bresaola chislic.</v-card-text>
    </v-card>
  </v-card-text>

</div>

</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
    name: "",
    props: ["id"],
    components: {
        
    },
    data: () => ({

    }),
    methods: {

    },
    computed: {
        
    }

}
</script>

<style>


</style>