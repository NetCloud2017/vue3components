<template>
  <div class="icon">
    <i :class="['iconfont', `icon-${name}`]"></i>
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
//   height: auto;
  width: auto;
  i {
    font-size: inherit;
  }
}
</style>
>
