import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-scss.min";
import Prism from "vue-prism-component";
Vue.component("prism", Prism);


// globally register reasons
import './components/Reasons/globals'

import i18n from './i18n'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: function (h) { return h(App) }
}).$mount('#app')
