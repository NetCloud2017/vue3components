<template>
    <div>
        <component :is="activeComponent"></component>
    </div>
</template>

<script>
import RefTest from "./vue3Test/ref.vue";
import TeleportTest from "./vue3Test/Teleport.vue";
import { useRoute } from "vue-router";
import { ref } from "vue";
export default {
    setup() {
        let { query } = useRoute();

        let activeComponent = ref((query && query.testModule) || "");
        return {
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
