<template>
    <div class="num_list">
        <num-item
            class="numItem"
            v-for="(item, index) in numStr2Arr"
            :key="index"
            :numItem="item"
        ></num-item>
    </div>
</template>
<script>
import NumberItem from "./NumberItem";
// let lastNum = "0";
import { reactive, computed, defineComponent } from "vue";
export default defineComponent({
    name: "RunningNum",
    props: {
        num: {
            type: String,
            default: "0",
        },
    },
    setup(props) {
        let numArr = reactive([]);
        let numStr2Arr = computed(() => {
            let { num } = props,
                // 数字变数组 [ string number ]
                nums = (num + "").split(""),
                offsets;
            offsets = nums.map((num /*index*/) => {
                // let ago = lastNums[index] || 0;
                return {
                    /* 
            初始 时 都是 非零或 0  - 0 
            运行时 
          */
                    // 获取差值计算滚动时间  单位（ms)
                    // time: Math.abs(num - ago == 0 ? 0 : num - ago) * 400, // 这里有个错误： 数值差值为  * 440 大于 1000 时 看不到 数字变更。
                    time: 600,
                    currentNum: num,
                };
            });

            // lastNum = num;
            return offsets;
        });
        return {
            props,
            numArr,
            numStr2Arr,
        };
    },

    components: {
        "num-item": NumberItem,
    },
});
</script>
<style scoped lang="less">
.num_list {
    display: flex;
    justify-content: flex-start;
    overflow: hidden;
}
</style>
