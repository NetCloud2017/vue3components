<template>
    <!-- <RunningNum class="roo" :num="num"></RunningNum> -->
    <router-view></router-view>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
    name: "App",

    setup() {
        let num = ref(0);
        // setInterval(() => {
        //     num.value = Math.floor(Math.random() * 100 + 1);
        // }, 2000);
        return {
            num,
        };
    },
});
</script>

<style scoped>
.roo {
    width: 100px;
    height: 50px;
}
</style>
