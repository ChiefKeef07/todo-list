import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'tachyons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VuePikaday from '@enrian/vue-pikaday'
import moment from 'moment'

import '@enrian/vue-pikaday/dist/vue-pikaday.min.css';
 
Vue.use(VueAxios, axios)
Vue.use(VuePikaday);

Vue.prototype.moment = moment

library.add(faCheck, faTimes)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
