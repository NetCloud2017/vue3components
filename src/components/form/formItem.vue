<template>
  <div>
    <label class="labelTag">
      <span class="labelText">
        {{ label }}
      </span>
      <slot></slot>
    </label>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "form-item",
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

<style lang="less" scoped>
  .labelTag {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    .labelText {
      text-align: right;
      padding-right: 25px;
      flex-shrink: 0;
      min-width: 80px;

    }
  }
</style>
