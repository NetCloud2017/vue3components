<template>
  <div class="num_list">
    <num-item
      class="numItem"
      v-for="(item, index) in numArr"
      :key="index"
      :numItem="item"
    ></num-item>
  </div>
</template>
<script>
import NumberItem from "./NumberItem";
let lastNum = "0";
export default {
  name: "RunningNum",
  props: {
    num: {
      type: String,
      default: "0",
    },
  },
  data() {
    return {
      numArr: [],
    };
  },
  components: {
    "num-item": NumberItem,
  },
  beforeMount() {
    this.str2Arr();
    //     let proxyNum = {},
    //       _this = this;
    //     proxyNum = new Proxy(proxyNum, {
    //       get(objSelf, attrStr) {
    //         return objSelf[attrStr];
    //       },
    //       set(objSelf, attrStr, value) {
    //         // try {

    //         console.log(typeof value == "string", typeof value);
    //         if (typeof value == "string") {

    //           console.log(123);
    //           objSelf[attrStr] = value;
    //           _this.str2Arr();
    //           return true;
    //         } else {
    //           // return false; 加了这行会报错；
    //           // RunNum.vue?3def:53 Uncaught (in promise) TypeError: 'set' on proxy: trap returned falsish for property 'num'
    //         }
    //         // } catch (err) {
    //         //   console.log(err);
    //         // }
    //       },
    //     });

    //     proxyNum["num"] = this.num;
  },
  beforeUpdate() {
    console.log(this, "3333");
    // this.str2Arr()
  },
  methods: {
    str2Arr() {
      let { num } = this,
        // 数字变数组 [ string number ]
        lastNums = (lastNum + "").split(""),
        nums = (num + "").split(""),
        offsets;
      offsets = nums.map((num, index) => {
        let ago = lastNums[index] || 0;
        return {
          // 获取差值计算滚动时间  单位（ms)
          time: Math.abs(num - ago == 0 ? 0 : num - ago) * 400,
          currentNum: num,
        };
      });
      lastNum = num;
      this.numArr.splice(0, this.numArr.length - 1, ...offsets);
      console.log(offsets, "111");
    },
  },
};
</script>
<style scoped lang="less">
.num_list {
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
}
</style>
