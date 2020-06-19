<template>
  <div>
    <h2>深入v-model</h2>

    <input type="text" v-model="name1" />
    <span>{{name1}}</span>
    <br />
    <br />

    <input type="text" :value="name2" @input="name2=$event.target.value" />
    <span>{{name2}}</span>
    <br />
    <br />
    <CustomInput v-model="name3" />
    <sapn>{{name3}}</sapn>
    <br />
    <br />
    <CustomInput :value="name4" @input="name4=$event" />
    <sapn>{{name4}}</sapn>
  </div>
</template>

<script type="text/ecmascript-6">
import CustomInput from "./CustomInput.vue";
export default {
  name: "ModelTest",
  data() {
    return {
      name1: "11",
      name2: "22",
      name3: "33",
      name4: "44"
    };
  },
  components: {
    CustomInput
  }
};
</script>
