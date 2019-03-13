import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import "./assets/base.css";
import { Store } from "./ui/store/Store";

Vue.config.productionTip = false;
Vue.use(Vuex);

new Vue({
  store: Store.build(),
  render: h => h(App)
}).$mount("#app");
