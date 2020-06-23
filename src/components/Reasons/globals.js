import Vue from 'vue'

// Globally register all base components for convenience, because they
// will be used very frequently. Components are registered using the
// PascalCased version of their file name.

// https://webpack.js.org/guides/dependency-management/#require-context
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
  // Get the component config
  const componentConfig = requireComponent(fileName)
  // Get the component name
  const componentName = fileName
    // Remove the "./" from the beginning - did I do this right?
    .replace(/^\.\/, '')
    // Remove the file extension from the end
    .replace(/\.\w+$/, '')


  // Globally register the component
  Vue.component(componentName, componentConfig.default || componentConfig)
})

