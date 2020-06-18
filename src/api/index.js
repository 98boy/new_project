import ajax from "./ajax";
import mockAjax from "./mockAjax";

// 登录
export function reqLogin(mobile, password) {
  // ajax函数使用
  //  return ajax({
  //     path: "/user/passport/login",
  //     method: 'POST',
  //     data: {
  //       mobile,
  //       password
  //     }
  //  })
  // ajax对象使用
  return ajax.post("/user/passport/login", {
    mobile,
    password,
  });
}
// 首页三级分类
export const reqCategorysList = () => ajax("/product/getBaseCategoryList");
// 搜索商品
export const reqProductList = (options) => ajax.post("/list", options);
// 商品详情
export const reqDetailInfo = (skuId) => ajax.get(`/item/${skuId}`);
// 加入购物车
export const reqAddToCart = (skuId, skuNum) =>
  ajax.post(`/cart/addToCart/${skuId}/${skuNum}`);
// 购物车列表
export const reqShopCart = () => ajax.get("/cart/cartList");
// 切换商品选中状态
export const reqCheckItem = (skuId, isCheck) =>
  ajax.get(`/cart/checkCart/${skuId}/${isCheck}`);
// 删除购物项商品
export const reqDeleteItem = (skuId) => ajax.delete(`cart/deleteCart/${skuId}`);
// 注册用户
export const reqRegister = (userInfo) =>
  ajax.post("/user/passport/register", userInfo);
// 退出登录
export const reqLogout = () => ajax.get("./user/passport/logout");
// 获取订单列表
export const reqOrders = (page, limit) => ajax(`/order/auth/${page}/${limit}`);
// 获取订单校验信息
export const reqTradeInfo = () => ajax("/order/auth/trade");
// 提交订单
export const reqSubmitOrder = (tradeNo, orderInfo) =>
  ajax({
    url: "/order/auth/submitOrder",
    method: "POST",
    // query: {tradeNo},  // 不可以, 在前台路由跳转时用
    params: { tradeNo }, // 指定query参数
    data: orderInfo,
  });
// 获取订单支付信息
export const reqPayInfo = (orderId) =>
  ajax(`/payment/weixin/createNative/${orderId}`);
// 查询订单支付状态
export const reqPayStatus = (orderId) =>
  ajax(`/payment/weixin/queryPayStatus/${orderId}`);
// 定义访问mock接口的接口请求函数
export const reqBanners = () => mockAjax("/banners");
export const reqFloors = () => mockAjax("/floors");
export const reqToday = () => mockAjax("/today");
