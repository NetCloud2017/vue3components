<template>
  <div>
    <label>
      {{label}}
      <slot></slot>
    </label>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: 'form-item',
  props: {
    label: String,
    setup() {
      const data = reactive({
        name: "iwe",
      });
      return data;
    },
  },
};
</script>

<style lang="scss" scoped></style>
