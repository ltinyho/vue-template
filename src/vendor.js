import Vue from 'vue'

// es6兼容库
import 'babel-polyfill'
/*
 *  第三方插件
 * */
import weui from 'weui.js'
import 'weui/dist/style/weui.min.css'

// elementui组件库
import ElementUI from 'element-ui'
import  'element-ui/lib/theme-default/index.css'
import  axios from 'axios'
import 'resetcss'

// js库

// css库
import 'font-awesome/css/font-awesome.min.css'
Vue.prototype.$http = axios;

// 挂载全局过滤器
import filters from './assets/js/filters'
Object.keys(filters).forEach(function (key) {
  Vue.filter(key, filters[key]);
})
Vue.use(ElementUI)