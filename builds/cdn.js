import validator from '../src/index.js'

document.addEventListener('alpine:init', () => {
  window.Alpine.plugin(validator)
})
