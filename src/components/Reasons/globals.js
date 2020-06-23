import Vue from 'vue'

const components = require.context('.', true, /\.vue$/i)

 components.keys().map(key => {
     Vue.component(files(key).default.name ?? key.split('/').pop().split('.')[0], components(key).default);
 })


