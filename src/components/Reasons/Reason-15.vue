<template>
    <v-card-text>
        <strong>Eye for accessibility</strong> <br>
           <v-btn small fab dark color="purple darken-4" class="mr-1" title="Edit title" aria-label="Edit title"><v-icon>mdi-pencil</v-icon></v-btn>
        I keep in mind that web is surfed by people who may not have perfect eyesight, so if my UI involves buttons without text, I make sure to include aria-labels for screen readers: <br>
     

<prism language="html">{{ button }}</prism>
   
    </v-card-text>
</template>


<script>
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
    name: "",
    props: [""],
    components: {
        
    },
    data: () => ({
       button: ` <v-btn title="Edit title" aria-label="Edit title"><v-icon>mdi-pencil</v-icon></v-btn>`,
    }),
    methods: {

    },
    computed: {
        
    }

}
</script>

<style>

</style>

