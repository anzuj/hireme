<template>
    <v-row justify="center" no-gutters id="reasons">
        <!-- nav buttons -->
        <v-row justify="center" class="mb-2" no-gutters>
            <a
                :href="reason.href"
                v-for="reason in reasons"
                :key="reason.id"
                class="text-decoration-none"
            >
                <v-btn small color="teal" dark class="ma-1 rounded-pill navbtn"
                    >#{{ reason.id }}</v-btn
                >
            </a>
        </v-row>

        <v-col cols="12" sm="10">
            <!-- all reasons -->
            <div v-for="reason in reasons" :key="reason.id">
                <v-card
                    min-height="200"
                    class="fade-in reasonCard ma-6 mb-10 rounded-xl pt-4"
                    flat
                >
                    <a :href="`#reason-${reason.id}`">
                        <div class="number" :id="`reason-${reason.id}`">
                            #{{ reason.id }}
                        </div></a
                    >
                    <component :is="reason.name" class="pt-5" />
                </v-card>
            </div>
            <!-- /all reasons -->
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: "",
    props: [""],
    components: {},
    data: () => ({
        reasons: []
    }),
    methods: {},
    mounted() {
        // generating an array of globally registered reasons to render in template
        for (let i = 1; i <= this.$store.state.reasonsAmount; i++) {
            this.reasons.push({
                id: i,
                name: `Reason-${i}`,
                href: `#reason-${i}`
            });
        }
    },
    computed: {}
};
</script>

<style>
.number {
    left: 30px;
    position: absolute;
    top: -40px;
    font-size: 55px;
    font-family: "Bungee", sans-serif;
    color: rgb(212, 130, 144);
    /* -webkit-text-stroke: 3px white; */
    text-shadow: 4px -2px #ffffff;
    font-style: italic;
}

.navbtn {
    position: relative;
    transition: 0.12s linear;
}
.navbtn:hover {
    background-color: #61b8a5 !important;
    bottom: 3px;
}

.spin {
    display: inline-block;
    animation: spin 6s infinite;
    animation-timing-function: linear;
}
@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.pulse {
    display: inline-block;
    animation: pulse 2s infinite;
    animation-timing-function: linear;
}

@keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.2);
    }
    100% {
        transform: scale(1);
    }
}
</style>