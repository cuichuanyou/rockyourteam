import Vue from 'vue'
import App from './App.vue'
import router from './router'
import copyToastMes from './components/copyToast';
import toastMessage from './components/toastMessage';
import axios from './http';
// 复制成功 提示消息插件
Vue.use(copyToastMes);
Vue.use(toastMessage);
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
copyToastMes.install = (Vue) => {
  Vue.prototype.$copyToastMes = copyToastMes;
};
toastMessage.install = (Vue) => {
  Vue.prototype.$toastMessage = toastMessage;
};
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
