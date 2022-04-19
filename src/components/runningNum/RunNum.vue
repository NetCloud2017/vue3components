<template>
    <div class="num_list">
        <num-item
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
    props: {
        num: {
            type: String,
            default: "0",
        },
    },

    components: {
        "num-item": NumberItem,
    },
    methods: {
        numArr() {
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
            return offsets;
        },
    },
};
</script>
<style scoped lang="less">
.num_list {
    display: flex;
    justify-content: flex-start;
}
</style>
