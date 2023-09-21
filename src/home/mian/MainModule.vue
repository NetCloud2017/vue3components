<template>
  <div>
    <component
      v-bind="activeAttrs"
      :is="activeComponent"
      @closeEmit="activeAttrs.closeEmit"
    ></component>
    <button @click="activeAttrs.openModule">open teleport</button>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { useRoute } from "vue-router";
import RefTest from "./vue3Test/LearnRef.vue";
import TeleportTest from "./vue3Test/Teleport.vue";
import SuspenseTest from "./vue3Test/SupenseTest.vue";
export default {
  setup() {
    const { query } = useRoute();
    let activeComponent = ref(query.testModule || "");

    // teleport code
    let isOpen = ref(false);
    const closeEmit = () => {
      isOpen.value = false;
      console.log("close");
    };
    const openModule = () => {
      isOpen.value = true;
      console.log(isOpen, "23");
    };
    const activeAttrs = reactive({
      isOpen,
      closeEmit,
      openModule,
    });
    return {
      activeAttrs,
      activeComponent,
    };
  },
  components: {
    RefTest,
    TeleportTest,
    SuspenseTest,
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
