import Mock from "mockjs";
import banners from "./banners.json";
import floors from "./floors.json";
import today from "@/mock/today";
// 模拟返回banners数据接口
Mock.mock("/mock/banners", {
  code: 200,
  data: banners,
});
// 模拟返回floors数据接口
Mock.mock("/mock/floors", {
  code: 200,
  data: floors,
});
// 模拟返回Today的数据接口
Mock.mock("/mock/today", {
  code: 200,
  data: today,
});
