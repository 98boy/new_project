/* 
应用的所有路由配置的数组
*/
import Home from "../pages/Home";
import Search from "../pages/Search";
import Register from "../pages/Register";
// import Login from '../pages/Login'
import Login from "@/pages/Login";
import Detail from "@/pages/Detail";

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
  },
  {
    path: "/detail/:id",
    component: Detail,
  },
];
