import Vue from 'vue'
import App from './app.vue'

import './assets/style/global.styl'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  render: function(createElement){
    return createElement(App)
  }
}).$mount(root)