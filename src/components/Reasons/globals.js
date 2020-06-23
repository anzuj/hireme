import Vue from 'vue'
import store from '../../store'


const requireComponent = require.context(
  // Look for files in the current directory
  '.',
  // Do not look in subdirectories
  false,
  // Only include "Reason-" prefixed .vue files
  /Reason-[\w-]+\.vue$/
)



// For each matching file name...
requireComponent.keys().forEach((fileName) => {
  // Update number of reasons in Vuex
  store.commit("INCREASE_REASON_AMOUNT")
  // Get the component config
  const componentConfig = requireComponent(fileName)
  // Get the component name
  const componentName = fileName
    // Remove the "./" from the beginning
    .replace(/^\.\//, '')
    // Remove the file extension from the end
    .replace(/\.\w+$/, '')


  // Globally register the component
  Vue.component(componentName, componentConfig.default || componentConfig)
})

