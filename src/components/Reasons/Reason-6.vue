<template>
  <v-card-text>
      Your project needs internationalisation in Front End codebase? Worry not 👌

      <v-card outlined class="mt-2 pa-2 pb-0">
<v-row justify="space-between" no-gutters>
      <v-col>
        <p class="mt-4 message">
          {{ $t('message') }}
          <img class="ml-2" :src="flag" width="28" />
        </p>
      </v-col>
      <v-col style="max-width:120px">
        <div id="langSelector">
          <v-select
          input="fadeToggle"
            :menu-props="{bottom: true, top: false, offsetY: true }"
            solo
            flat
            color="lightpink"
            background-color="transparent"
            append-icon="mdi-earth"
            v-model="$i18n.locale"
            :items="languages"
          ></v-select>
        </div>
      </v-col>
    </v-row>
      </v-card>
    
  </v-card-text>
</template>

<script>
export default {
  data: () => ({
      isFading: true,
    languages: [
      {
        value: "en",
        text: "EN",
        flag:
          "https://cdn.britannica.com/29/22529-004-ED1907BE/Union-Flag-Cross-St-Andrew-of-George.jpg"
      },
      {
        value: "de",
        text: "DE",
        flag:
          "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png"
      },
      {
        value: "et",
        text: "ET",
        flag:
          "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Estonia.svg"
      }
    ]
  }),
  computed: {
    flag() {
      return this.languages.filter(
        language => language.value === this.$i18n.locale
      )[0].flag;
    }
  },

};
</script>

<style>
.message {
  font-family: "Halant", serif;
  font-style: italic;
  font-size: 20px;
  color: rgb(43, 43, 43);
}

.v-navigation-drawer .v-list-item__icon i,
.mdi-earth.theme--light {
  color: rgb(194, 127, 168) !important;
}
</style>