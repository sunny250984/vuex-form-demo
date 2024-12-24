import Vue from 'vue'
import App from './App.vue'
import store from './store'

import BaseInput from './components/BaseInput'
import BaseSelect from './components/BaseSelect'

Vue.config.productionTip = false
Vue.component('BaseInput', BaseInput)
Vue.component('BaseSelect', BaseSelect)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
