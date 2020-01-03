import Vue from 'vue';

import 'font-awesome/css/font-awesome.min.css';
import 'material-design-icons/iconfont/material-icons.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// import './assets/styles/scss/_variables.scss';
// import './assets/styles/scss/main.scss';

import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

export default new Vue({
  router,
  store,
  components: { App },
  template: '<App/>',
}).$mount('#app');
