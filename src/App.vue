<template>
    <v-app id="app">
        <v-fade-transition mode="out-in">
            <router-view></router-view>
        </v-fade-transition>
        <v-btn
            v-scroll="onScroll"
            v-show="fab"
            fab
            dark
            fixed
            bottom
            right
            color="teal"
            @click="toTop"
            class="fade-in"
        >
            <v-icon>mdi-chevron-up</v-icon>
        </v-btn>
    </v-app>
</template>

<script>
// import Home from "@/views/Home";

export default {
    name: "App",

    components: {},

    data: () => ({
        fab: false
    }),
    methods: {
        onScroll(e) {
            if (typeof window === "undefined") return;
            const top = window.pageYOffset || e.target.scrollTop || 0;
            this.fab = top > 20;
        },
        toTop() {
            this.$vuetify.goTo(0);
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
</style>
