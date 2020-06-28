<template>
    <v-card-text>
        I'm nowhere near settling with my knowledge base. Here's a list of
        things I want to learn next:

        <v-list>
            <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-icon>
                    <v-icon v-text="item.icon" :color="item.color"></v-icon>
                </v-list-item-icon>
                <v-list-item-content class="grey--text text--darken-1">
                    {{ item.text }}
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-card-text>
</template>

<script>
export default {
    data: () => ({
        items: [
            {
                text:
                    "React. Done a basic to-do-app, but really want to take a deeper dive. With my Vue experience component logic is already clear, but there are definitely some differences to keep in mind in the developing flow",
                icon: "mdi-react",
                color: "blue lighten-2"
            },
            {
                text:
                    'Typescript. Generic "undefined" console errors are the worst, right? I\'ve known about Typescript for a while and hope to make my code more streamlined with it in my future projects',
                icon: "mdi-language-typescript",
                color: "blue darken-1"
            },
            {
                text: `CSS preprocessors. As I\'ve used Front End libraries I haven\'t yet had the need to make extensive
                stylesheets for my projects. The things I needed to personalise
                I overwrote with vanilla CSS. But I\'d like to get more
                comfortable with preprocessors for sure`,
                icon: "mdi-brush",
                color: "primary"
            },
            {
                text: `Unit testing. Would love to
                take a deeper dive there to help create unit tests for my UIs`,
                icon: "mdi-cog-clockwise",
                color: "green"
            }
        ]
    })
};
</script>

<style></style>
