<template>
    <div class="suspense">
        <Suspense>
            <template #default>
                <!--这里可以放多个组件  -->
                <div>
                    <SuspenseChild></SuspenseChild>
                    <div>{{ error }}</div>
                </div>
            </template>
            <template #fallback>loading ......</template>
        </Suspense>
    </div>
</template>

<script setup>
import { onErrorCaptured, ref } from "vue";
import SuspenseChild from "./SuspenseChild.vue";
let error = ref("");
onErrorCaptured((e) => {
    error.value = e;
    return true; // 表示向上传播错误；
});
</script>

<style lang="less" scoped>
.suspense {
    color: #fff;
}
</style>
