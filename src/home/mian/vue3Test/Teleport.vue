<template>
    <teleport to="#module">
        <div v-if="isOpen"></div>
    </teleport>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
    setup() {
        let isOpen = ref(false);

        return { isOpen };
    },
});
</script>

<style scoped></style>
