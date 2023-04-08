<template>
    <component v-bind="_attrs" :is="activeComponent"></component>
</template>

<script>
import { ref, toRefs } from "vue";
import { useRoute } from "vue-router";
import RefTest from "./vue3Test/ref.vue";
import TeleportTest from "./vue3Test/Teleport.vue";
export default {
    setup() {
        const { query } = useRoute();
        let activeComponent = ref(query.testModule || "");
        const moduleAttrs = {
            RefTest: {},
            TeleportTest: {
                isOpen: false,
                closeModule: function () {},
            },
        };
        const _attrs = toRefs(moduleAttrs[query.testModule]);
        return {
            _attrs,
            activeComponent,
        };
    },
    components: {
        RefTest,
        TeleportTest,
    },
};
</script>

<style lang="less" scoped>
.kLineChart {
    width: 100%;
    height: 300px;
}
.test {
    color: #fff;
}
</style>
