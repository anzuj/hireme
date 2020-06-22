<template>
<div>
  
<v-card height="200" class="ma-6 rounded-xl" flat>
  <div class="number">#{{id}}</div>

  <v-card-text>
    Reason 2 stuff
  </v-card-text>
</v-card>
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