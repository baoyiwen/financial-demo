import Vue from 'vue'
import App from './App.vue'
import router from './routers/router'
import store from './store/store'
import './registerServiceWorker'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Cookies from 'js-cookie'
import i18n from './lang'
import '@/style/index.scss'
import 'normalize.css'
import './permission.js'
import iview from 'iview'
import 'iview/dist/styles/iview.css'

//  导入所有请求方法
import {getRequest, postRequest, deleteRequest, putRequest, uploadFileRequest} from '@/network/server'

//  向VUE的原型上添加请求方法
Vue.prototype.getRequest = getRequest;
Vue.prototype.postRequest = postRequest;
Vue.prototype.deleteRequest = deleteRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.uploadFileRequest = uploadFileRequest;


Vue.use(iview);


Vue.use(ElementUI,{
  size: Cookies.get('size') || 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
