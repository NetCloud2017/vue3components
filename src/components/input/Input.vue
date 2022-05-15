<template>
  <div class="inputItem">
    <input
      v-bind="$attrs"
      @input="$emit('update:value', $event.target.value)"
      :value="value"
      type="text"
    />
  </div>
</template>

<script>
export default {
  name: "aInput",
  emits: ["update:value"],
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: { type: String },
  },
  mounted() {
    console.log(this, "uuu");
  },
};
</script>

<style lang="less" scoped>
.inputItem {
  box-sizing: border-box;

  min-width: 150px;
  max-width: 850px;
  width: 100%;
  height: 48px;
  background-color: rgba(255, 255, 255, 0.1);
  input {
    border-radius: 7px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    height: 100%;
    width: 100%;
    caret-color: #fff;
    font-size: 15px;
    color: #fff;
    letter-spacing: 2px;
    box-sizing: border-box;
    padding: 0 10px;
    &:hover,
    &:focus {
      border-color: rgba(255, 255, 255, 0.3);
    }
  }
}
</style>
