// 管理首页Home数据
import {
  reqCategorysList
} from '@/api'
export default {
  state: {
    categoryList: [] //分类列表
  },
  mutations: {
    RECEIVE_CATEGORY_LIST(state, categoryList) {
      state.categoryList = categoryList.filter((item, index) => index < 15)
    }
  },
  actions: {
    async getCategorysList({
      commit
    }) {
      const result = await reqCategorysList()
      if (result.code === 200) {
        const categoryList = result.data
        commit('RECEIVE_CATEGORY_LIST', categoryList)
      }
    }
  },
  getters: {}
}