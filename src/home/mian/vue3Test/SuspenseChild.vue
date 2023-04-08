<template>
    <div>{{ count }}</div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
    setup() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    count: 666,
                });
            }, 2000);
        });
    },
});
</script>

<style lang="scss" scoped></style>
