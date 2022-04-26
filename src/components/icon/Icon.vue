<template>
  <div class="icon">
    <i :class="[`icon-${name}`]"></i>
  </div>
</template>

<script>
export default {
  name: "aIcon",
  props: {
    name: {
      type: String,
    },
  },
};
</script>

<style lang="less" scoped>
.icon {
  min-height: 20px;
  display: inline-block;
  //   height: auto;
  width: auto;
  i {
    font-size: inherit;
    height: 20px;
    width: 20px;
    text-align: center;
  }
}
</style>
>
