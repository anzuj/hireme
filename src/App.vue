<template>
    <v-app id="app">

            <Home/>

        <v-btn
            v-scroll="onScroll"
            v-show="fab"
            fab
            dark
            fixed
            bottom
            right
            color="teal"
            href="#portfolio"       
            class="fade-in"
        >
            <v-icon>mdi-chevron-up</v-icon>
        </v-btn>
    </v-app>
</template>

<script>
import Home from "@/components/Home";
export default {
    name: "App",

    components: {
        Home
    },

    data: () => ({
        fab: false
    }),
    methods: {
        onScroll(e) {
            if (typeof window === "undefined") return;
            const top = window.pageYOffset || e.target.scrollTop || 0;
            this.fab = top > 20;
        }
    }
};
</script>

<style>
#app {
    background: #fceb8f;
    background: url("https://www.transparenttextures.com/patterns/asfalt-light.png")
            repeat,
        linear-gradient(135deg, #fff886 10%, #f072b6 100%) fixed;
    font-family: Montserrat, sans-serif;
}

html {
  scroll-behavior: smooth;
}

</style>
