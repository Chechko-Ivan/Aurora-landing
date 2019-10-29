import Vue from 'vue'
import { notification } from 'ant-design-vue'
import 'ant-design-vue/lib/notification/style/index.css'

Vue.use({
  install(Vue) {
    Vue.prototype.$notification = notification
  }
})

notification.config({
  top: '15px'
})

export default () => notification
