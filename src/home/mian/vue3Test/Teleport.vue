<template>
    <teleport to="#module">
        <div class="module" v-if="isOpen">
            <slot>default text</slot>
            <button @click="closeModule">close</button>
        </div>
    </teleport>
</template>

<script>
import { defineComponent, onBeforeUpdate } from "vue";

export default defineComponent({
    setup(props, ctx) {
        const closeModule = () => {
            ctx.emit("closeEmit");
            console.log("123", ctx);
        };

        console.log(props, "teleport");
        onBeforeUpdate(() => {
            console.log(props, "teleport");
        });
        return {
            closeModule,
        };
    },
    props: {
        isOpen: {
            type: Boolean,
            default: false,
        },
    },
    emits: {
        closeEmit: null,
    },
});
</script>

<style scoped>
.module {
    position: fixed;
    top: 0;
    right: 10px;
    width: 100px;
    height: 100px;
    background-color: skyblue;
}
</style>
