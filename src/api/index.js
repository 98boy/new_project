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

// 定义访问mock接口的接口请求函数
export const reqBanners = () => mockAjax("/banners");
export const reqFloors = () => mockAjax("/floors");
export const reqToday = () => mockAjax("/today");
