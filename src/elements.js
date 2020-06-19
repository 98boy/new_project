import { Pagination, MessageBox, Message, Button } from "element-ui";
import Vue from "vue";
// 注册全局组件
Vue.component(Pagination.name, Pagination);
Vue.component(Button.name, Button);

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;
