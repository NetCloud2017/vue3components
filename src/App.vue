<template>
  <div class="app">
    <RunningNum class="nums" :num="num" />
  </div>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {
      num: "25323",
    };
  },
  mounted() {
    // setInterval(() => {
    //   // eslint-disable-next-line
    //   this.num = +this.num + 1;
    // }, 1000);
  },
};
</script>

<style scoped>
.nums {
  /* height: 100px;
 width: 50px; */
  color: #fff;
  font-size: 14px;
}
</style>
