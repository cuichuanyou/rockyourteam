/* eslint-disable no-shadow */
import Vue from 'vue';
import copyToast from './index.vue';

const ToastTem = Vue.extend(copyToast);
let instance;
let timer = null;
const copyToastMes = (options) => {
  if (!instance) {
    instance = new ToastTem();
    instance.vm = instance.$mount();
    document.body.appendChild(instance.vm.$el);
  }
  if (timer) {
    clearTimeout(timer);
    timer = null;
    instance.show = false;
    instance.message = '';
    instance.type = '';
  }
  const time = 3000;
  if (typeof options === 'string') {
    instance.message = options;
  } else if (typeof options === 'object') {
    // eslint-disable-next-line prefer-const
    const { message, type } = options;
    // eslint-disable-next-line no-shadow
    // eslint-disable-next-line no-unused-vars
    let { time } = options;
    instance.message = message;
    instance.type = type || 'primary';
    time = time || 3000;
  } else {
    return;
  }
  instance.show = true;
  timer = setTimeout(() => {
    instance.show = false;
    clearTimeout(timer);
    timer = null;
    instance.message = '';
  }, time);
};
copyToastMes.close = () => {
  if (timer) {
    clearTimeout(timer);
    timer = null;
    instance.show = false;
    instance.message = '';
  }
};
// eslint-disable-next-line no-shadow
copyToastMes.install = (Vue) => {
  // console.log('install--------copyToastMes');
  // eslint-disable-next-line no-param-reassign
  Vue.prototype.$copyToastMes = copyToastMes;
};
export default copyToastMes;
