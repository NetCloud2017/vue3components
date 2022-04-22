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
    let tiems = 0
    let  timer = setInterval(() => {
      tiems ++;
      if (tiems === 10) {
        clearInterval(timer);
      }
      this.num = (+this.num + 1) + '';
    }, 1000);
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
