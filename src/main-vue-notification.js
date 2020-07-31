
import Vue from 'vue'
import App from './App-vue-notification.vue'
//import plugin from 'plugin'
// https://github.com/euvl/vue-notification
import velocity from 'velocity-animate'
import Notifications from 'vue-notification'

// Vue.use( plugin, {
//     velocity,
//     /*
//     name: 'foo'
//      */
// })

// Vue.use(Notifications)
Vue.use(Notifications, { velocity })
new Vue({
    el: '#app',
    render: h => h(App)
})
