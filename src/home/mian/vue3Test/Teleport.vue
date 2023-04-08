<template>
    <teleport to="#module">
        <div v-if="isOpen">
            <slot>default text</slot>
            <button @click="closeModule">close</button>
        </div>
    </teleport>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    setup(props, ctx) {
        const closeModule = () => {
            ctx.emit("isOpenEmit");
        };
        return {
            closeModule,
        };
    },
    props: {
        isOpne: {
            type: Boolean,
            default: false,
        },
    },
    emits: {
        isOpenEmit: null,
    },
});
</script>

<style scoped></style>
