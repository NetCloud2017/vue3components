<template>
  <div class="inputItem">
    <input v-bind="$listens" type="text" />
  </div>
</template>

<script>
export default {
  name: "aInput",
  props: {
    type: {
      type: String,
      default: "text",
    },
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
