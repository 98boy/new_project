/* 
应用的所有路由配置的数组
*/
import Home from "../pages/Home";
import Search from "../pages/Search";
import Register from "../pages/Register";
// import Login from '../pages/Login'
import Login from "@/pages/Login";
import Detail from "@/pages/Detail";
import AddCartSuccess from "@/pages/AddCartSuccess";
import ShopCart from "@/pages/ShopCart";
import Trade from "@/pages/Trade";
import Pay from "@/pages/Pay";
import PaySuccess from "@/pages/PaySuccess";
import Center from "@/pages/Center";
import MyOrder from "@/pages/Center/MyOrder";
import GroupBuy from "@/pages/Center/GroupBuy";

import stote from "@/store";
export default [
  {
    path: "/",
    component: Home,
  },
  {
    name: "search",
    path: "/search/:keyword?",
    component: Search,
  },
  {
    path: "/register",
    component: Register,
    meta: {
      isHideFooter: true,
    },
  },
  {
    path: "/login",
    component: Login,
    meta: {
      isHideFooter: true,
    },
    // 没有登录才能看到登录页面 与Login中的二选一
    // beforeEnter: (to, from, next) => { //路由守卫
    //   const token = stote.state.user.userInfo.token;
    //   // 已经登录强制跳转到首页
    //   if (token) {
    //     next("/");
    //   } else {
    //     // 没登录放行
    //     next();
    //   }
    // },
  },
  {
    path: "/detail/:id",
    component: Detail,
  },
  {
    path: "/addcartsuccess",
    component: AddCartSuccess,
    // 只有携带的skuNum以及sessionStorage中有skuInfo数据, 才能查看添加购物车成功的界面
    beforeEnter: (to, from, next) => {
      // query参数skuNum
      const skuNum = to.query.skuNum;
      // sessionStorage中有skuInfo数据
      const skuInfo = JSON.parse(window.sessionStorage.getItem("SKU_INFO_KEY"));
      // 只有2个条件都满足才放行
      if (skuNum && skuInfo instanceof Object) {
        next();
      } else {
        // 如果没有, 自动跳转到购物车
        next("/shopcart");
      }
    },
  },
  {
    path: "/shopcart",
    component: ShopCart,
  },
  {
    path: "/trade",
    component: Trade,
    beforeEnter: (to, from, next) => {
      // 必须是从购物车界面过来的才行
      if (from.path === "/shopcart") {
        next();
      } else {
        // 否则自动跳转到购物车界面
        next("/shopcart");
      }
    },
  },
  {
    path: "/pay",
    component: Pay,
    beforeEnter: (to, from, next) => {
      // 必须是从trade界面过来的才行
      if (from.path === "/trade") {
        next();
      } else {
        // 否则自动跳转到trade界面
        next("/trade");
      }
    },
  },
  {
    path: "/paysuccess",
    component: PaySuccess,
    beforeEnter: (to, from, next) => {
      // 必须是从pay界面过来的才行
      if (from.path === "/pay") {
        next();
      } else {
        // 否则自动跳转到pay界面
        next("/pay");
      }
    },
  },
  {
    path: "/center",
    component: Center,
    children: [
      {
        path: "/center/myorder",
        component: MyOrder,
      },
      {
        path: "groupbuy",
        component: GroupBuy,
      },
      // 自动跳转的路由
      {
        path: "",
        redirect: "/center/myorder",
      },
    ],
  },
];
