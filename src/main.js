import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import '@/assets/styles/reset.css'
import '@/assets/styles/base.less'
import './theme/element/index.css'
import QuerySearch from '@/components/QuerySearch.vue'
import Table from '@/components/Table.vue'
import Form from '@/components/Form.vue'
import '@/assets/constants/options.js'

Vue.component('QuerySearch', QuerySearch)
Vue.component('Table', Table)
Vue.component('Form', Form)

Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
