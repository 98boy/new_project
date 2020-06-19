<template>
  <div>
    <h2>效果一: 显示TODO列表时, 已完成的TODO为绿色</h2>
    <List :data="todos">
      <template slot-scope="scope">
        <span v-if="scope.row.isComplete">{{scope.row.text}}</span>
        <sapn v-else style="color:green">{{scope.row.text}}</sapn>
      </template>
    </List>
    <hr />

    <h2>效果二: 显示TODO列表时, 带序号, TODO的颜色为蓝绿搭配</h2>
    <List :data="todos">
      <template slot-scope="scope">
        <span>{{scope.row.text}}</span>
        <sapn
          :style="{color:scope.$index%2==1?'green':'blue'}"
        >{{scope.$index+1}}--{{scope.row.text}}</sapn>
      </template>
    </List>
  </div>
</template>

<script type="text/ecmascript-6">
import List from "./List";
export default {
  name: "ScopeSlotTest",
  data() {
    return {
      todos: [
        { id: 1, text: "AAA", isComplete: false },
        { id: 2, text: "BBB", isComplete: true },
        { id: 3, text: "CCC", isComplete: false },
        { id: 4, text: "DDD", isComplete: false }
      ]
    };
  },

  components: {
    List
  }
};
</script>
