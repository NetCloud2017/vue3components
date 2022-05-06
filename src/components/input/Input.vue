<template>
  <div class="inputItem">
      <input v-bind="$listens" type="text">
  </div>
</template>

<script>
export default {
    name:'aInput',
    props: {
        type: {
            type: String,
            default: 'text',
        },

    }
}
</script>

<style>

</style>