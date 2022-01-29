import Vue from 'vue'
import { Button, Form, FormItem, Input, Message, MessageBox } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Input)
// 把这个弹框组件挂载到Vue.message中
Vue.prototype.$message = Message
// 需要单独引入Message, 并挂载到Vue.message中
Vue.prototype.$confirm = MessageBox.confirm
