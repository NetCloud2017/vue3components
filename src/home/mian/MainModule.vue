<template>
    <div ref="kLineChart" class="kLineChart"></div>
    <div></div>
</template>

<script setup>
import { ref } from "vue";
let kLineChart = ref(null);
</script>

<style lang="less" scoped>
.kLineChart {
    width: 100%;
    height: 300px;
}
</style>
