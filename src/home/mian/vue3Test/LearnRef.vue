<template>
    <div class="test">
        <div>{{ data.count }}</div>
        <div>{{ doubleCount }}</div>
        <button @click="add">add</button>
    </div>
</template>

<script setup>
import { reactive, computed } from "vue";
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
