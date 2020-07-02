<template>
    <v-main transition="fade-transition">
        <v-row justify="center" no-gutters class="ma-0 pa-0">
            <v-col cols="12" md="10" class="ma-0 pa-0">
                <v-sheet class="jumboCard-top">
                    <v-row dense justify="end" no-gutters>
                        <v-btn
                            id="portfolio"
                            color="accent darken-2"
                            small
                            class
                            href="https://anzudev.com"
                            target="_blank"
                            text
                        >
                            <span class="mr-2">PORTFOLIO</span>
                            <v-icon small>mdi-open-in-new</v-icon>
                        </v-btn>
                    </v-row>
                    <IntroKitty />
                </v-sheet>
            </v-col>
        </v-row>

        <!-- buttons -->
        <!-- <div align="center" class="mt-n7 mb-4">
<v-card class="buttons rounded-xl" max-width="250" flat color="accent lighten-3">
   <div class="d-flex justify-space-between align-center my-2">
        <v-btn v-ripple="{ class: 'red--text text--lighten-4' }" rounded depressed class="mr-2" text>See all reasons</v-btn>
        <v-btn v-ripple="{ class: 'red--text text--lighten-4' }" fab small depressed class="mr-2" text>
          <v-icon id="random">mdi-dice-5-outline</v-icon>
        </v-btn>
      </div>
</v-card>
</div> -->
        <!-- /buttons -->

        <v-row justify="center" no-gutters>
            <v-col cols="12" md="10">
                <ReasonsContainer />
            </v-col>
        </v-row>
    </v-main>
</template>

<script>
import IntroKitty from "@/components/IntroKitty";
import ReasonsContainer from "@/components/ReasonsContainer";
export default {
    props: [""],
    components: {
        IntroKitty,
        ReasonsContainer
    },
    data: () => ({}),
    methods: {},
    computed: {}
};
</script>

<style>
.jumboCard-top {
    border-bottom-left-radius: 150px !important;
    border-bottom-right-radius: 150px !important;
    background-color: rgba(255, 255, 255, 0.378) !important;
    box-shadow: 0px 0px 20px 8px rgba(150, 35, 90, 0.17) !important;
}

.shake {
    animation: shake 0.5s;
}

#random {
    transition: all 0.2s ease-in-out;
}
#random:hover {
    cursor: pointer;
    animation: shake 0.4s;
}

.buttons .v-btn::before {
    background: transparent !important;
}

.buttons .v-btn:hover {
    color: rgb(172, 87, 101) !important;
    font-weight: bold;
}

@keyframes shake {
    0% {
        transform: rotate(0);
    }
    50% {
        transform: rotate(30deg);
    }
    100% {
        transform: rotate(0);
    }
}

@media only screen and (max-width: 600px) {
    .jumboCard-top {
        border-bottom-left-radius: 50px !important;
        border-bottom-right-radius: 50px !important;
    }
}

.fade-in {
    animation: fade-in 1s;
}

@keyframes fade-in {
    0% {
        opacity: 0%;
    }
    100% {
        opacity: 100%;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s;
}
.fade-enter, .fade-leave-to  {
    opacity: 0;
}
</style>