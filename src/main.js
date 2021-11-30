import Vue from 'vue'
import App from './App.vue'
import router from './router'
import SshPre from 'simple-syntax-highlighter'
import 'simple-syntax-highlighter/dist/sshpre.css'
import Clipboard from 'v-clipboard'


import './assets/scss/main.scss'


Vue.use(Clipboard)
Vue.component('SshPre', SshPre)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
