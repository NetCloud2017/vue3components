<template>
    <div class="suspense">
        <Suspense>
            <template #default>
                <!--这里可以放多个组件  -->
                <SuspenseChild></SuspenseChild
            ></template>
            <template #fallback>loading ......</template>
        </Suspense>
    </div>
</template>

<script setup>
import SuspenseChild from "./SuspenseChild.vue";
</script>

<style lang="less" scoped>
.suspense {
    color: #fff;
}
</style>
