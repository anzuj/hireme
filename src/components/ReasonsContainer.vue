<template>
  <div>
    <div v-for="reason in reasons" :key="reason.id">
      <v-card min-height="200" class="reasonCard ma-6 mb-10 rounded-xl" flat>
        <div class="number">#{{reason.id}}</div>

        <component :is="reason.name" class="pt-5"/>
      </v-card>
    </div>
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
    Reason1,
    Reason2,
    Reason3
  },
  data: () => ({
    reasons: [
      {
        id: 1,
        name: "Reason1"
      },
      {
        id: 2,
        name: "Reason2"
      },
      {
        id: 3,
        name: "Reason3"
      }
    ]
  }),
  methods: {},
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
  text-shadow:  4px -2px #ffffff;
  font-style: italic;
}

.reasonCard {
  margin-bottom: 90px !important;
}

.spin{
    display: inline-block;
  animation: spin 6s infinite;
  animation-timing-function: linear;
}
@keyframes spin {
      from { 
            transform: rotate(0deg); 
        } to { 
            transform: rotate(360deg); 
        }
}

.pulse{
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