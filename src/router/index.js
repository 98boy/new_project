/* 
路由器对象
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

// 声明使用vue插件
Vue.use(VueRouter)

// 保存原有的push方法
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace
// 重写VueRouter原型的push方法
VueRouter.prototype.push = function (location, onComplete, onAbort) {
  // 没有指定回调函数，调用原有的push后的catch方法处理错误的promise
  if (!onComplete && !onAbort) {
    return originPush.call(this, location).catch(error => {})
  } else {
    // 传入回调，直接调用原本的push方法
    originPush.call(this, location, onComplete, onAbort)
  }

}
// 重写VueRouter原型的replace方法
VueRouter.prototype.replace = function (location, onComplete, onAbort) {
  // 没有指定回调函数，调用原有的push后的catch方法处理错误的promise
  if (!onComplete && !onAbort) {
    return originReplace.call(this, location).catch(error => {})
  } else {
    // 传入回调，直接调用原本的push方法
    originReplace.call(this, location, onComplete, onAbort)
  }

}

// 向外暴露路由器对象
export default new VueRouter({
  mode: 'history', // 不带#
  routes,
})