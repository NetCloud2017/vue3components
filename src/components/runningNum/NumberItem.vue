<template>
    <div :class="[`${size}-size`, 'num_run']">
        <!-- 位移  -->
        <ul
            class="num_list"
            :style="{
                transitionDuration: `${numItem.time}ms`,
                transform: `translateY(${-(numItem.currentNum * height)}px)`,
            }"
        >
            <li ref="numCell">0</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
        </ul>
    </div>
</template>
<script>
import { defineComponent, ref, onMounted } from "vue";
export default defineComponent({
    props: {
        numItem: {
            type: Object,
        },
        size: {
            type: String,
            default: "nor",
        },
    },

    setup(props) {
        let height = ref(0);
        let numCell = ref("numCell");
        onMounted(() => {
            let dom = numCell.value;
            height.value = dom.getBoundingClientRect()?.height;
        });
        return {
            ...props,
            height,
            numCell,
        };
    },
});
</script>
<style scoped lang="less">
ul,
li {
    margin: 0;
    padding: 0;
    list-style: none;
    //   font-size: 0;
}
.nor_size {
    font-size: inherit;
}
.num_list {
    transition-property: all;
    transition-timing-function: linear;
    height: 2rem;
    line-height: 2rem;
    li {
        text-align: center;
        overflow: hidden;
        font-size: inherit;
    }
}
</style>
