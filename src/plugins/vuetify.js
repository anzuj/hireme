import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#A53C82',
                secondary: '#D48290',
                accent: '#F5A9A5',
                error: '#F44336',
                info: '#FF9800',
                success: '#8BC34A',       
              }
        },
    },
});
