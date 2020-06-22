<template>
<div>
   <component
   v-for="reason in reasons" :key="reason.id"
    :is="reason.name" :id="reason.id"/>

</div>
</template>

<script>
import Reason1 from "../components/Reasons/Reason1";
import Reason2 from "../components/Reasons/Reason2";
import Reason3 from "../components/Reasons/Reason3";
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
    name: "",
    props: [""],
    components: {
        Reason1, Reason2, Reason3
    },
    data: () => ({
reasons: [
{
    id:1,
    name: "Reason1"
},
{
    id:2,
    name: "Reason2"
},
{
    id:3,
    name: "Reason3"
}
]
    }),
    methods: {

    },
    computed: {
        
    }

}
</script>

<style>

div.number{
  margin-left: 80px;
  margin-bottom: -50px;
  z-index: 9900 !important;
  padding-top: 40px;
  font-size: 55px;
  font-family: "Bungee", sans-serif;
  color: rgb(212, 130, 144);
  text-shadow: 2px 2px #ffffff;
  font-style: italic; 
}

</style>