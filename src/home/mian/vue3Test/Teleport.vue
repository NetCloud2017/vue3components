<template>
    <teleport to="#module">
        <div class="module" v-if="isOpen">
            <slot>default text</slot>
            <button @click="closeModule">close</button>
            <div>{{ isKey }}</div>
        </div>
    </teleport>
</template>

<script>
import { defineComponent, onBeforeUpdate } from "vue";
import useKey from "./useKey";
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
        let isKey = useKey("h");
        return {
            closeModule,
            isKey,
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
