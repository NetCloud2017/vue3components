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

<style>
.inputItem {
  width: 200px;
  height: 50px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.5);
}
</style>
