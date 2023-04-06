<template>
    <div ref="kLineChart" class="kLineChart"></div>
    <div class="test">
        <div>{{ data.count }}</div>
        <div>{{ doubleCount }}</div>
        <button @click="add">add</button>
    </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
let kLineChart = ref(null);
const data = reactive({
    count: 0,
});
let doubleCount = computed(() => {
    return data.count * 2;
});
function add() {
    data.count++;
}
</script>

<style lang="less" scoped>
.kLineChart {
    width: 100%;
    height: 300px;
}
.test {
    color: #fff;
}
</style>
