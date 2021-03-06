/*
 * @Autor: YuanQiii
 * @GitHub: https://github.com/YuanQiii
 * @Date: 2022-04-01 16:41:12
 * @FilePath: \ERP_Vue\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import {
  Base64
} from 'js-base64'

import 'normalize.css/normalize.css'

import '@/icons/index'
// import '@/utils/permission'

import VCharts from 'v-charts'

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(Base64);
Vue.use(ElementUI);
Vue.use(VCharts);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");