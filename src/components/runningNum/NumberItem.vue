<template>
    <div :class="[`${size}-size`, 'num_run']">
        <ul
            class="num_list"
            :style="{
                transitionDuration: `${numItem.time}ms`,
                transform: `translateY(${-(numItem.currentNum * heght)}px)`,
            }"
        >
            <li ref="numCell">0</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        numItem: {
            type: Object,
        },
        size: {
            type: String,
            default: "nor",
        },
    },
    data() {
        return {
            
            height: 0,
        };
    },
    computed: {},
    mounted() {
        this.$nextTick(() => {
            let dom = this.$refs["numCell"],
                { heght } = dom.getBoundingClientRect();
            this.heght = heght;
        });
    },
};
</script>
<style scoped lang="less">
.num_list {
    transition-property: all;
    transition-timing-function: linear;
    li {
        height: 1rem;
        overflow: hidden;
        text-align: center;
        line-height: 1rem;
        font-size: 0.7rem;
    }
}
</style>
