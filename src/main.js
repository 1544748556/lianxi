import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from './router'

import 'normalize.css/normalize.css'

import {
  Icon,
  Input,
  Autocomplete
} from 'element-ui'
Vue.use(Autocomplete)
Vue.use(Input)
Vue.use(Icon)

// 引入移动端点击300ms延迟
import FastClick from 'fastclick'
//初始化FastClick实例。在页面的DOM文档加载完成后
FastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')