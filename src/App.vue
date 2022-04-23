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
      num: "25320",
    };
  },
  mounted() {
    let tiems = 0;
    let timer = setInterval(() => {
      tiems++;
      if (tiems === 10) {
        clearInterval(timer);
      }
      // 10000 到 99999 取值
      this.num = Math.floor(Math.floor(Math.random() * 90000) + 1) + 9999 + "";
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
