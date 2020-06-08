import ajax from './ajax'
import mockAjax from './mockAjax'


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
  return ajax.post('/user/passport/login', {
    mobile,
    password
  })
}
// 首页三级分类
export const reqCategorysList = () => ajax('/product/getBaseCategoryList')

// 定义访问mock接口的接口请求函数
export const reqBanners = () => mockAjax('/banners')
export const reqFloors = () => mockAjax('/floors')