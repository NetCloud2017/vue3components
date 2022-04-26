<template>
  <div class="app">
    <header class="head">
      <!--   -->
      <div class="left-icons">
        <aIcon class="icon" name="fullLayout" />
        <aIcon class="icon" name="asideLayout" />
        <aIcon class="icon" name="dubAsideLayout" />
      </div>

      <div class="right-icons">
        <aIcon class="icon" name="menu" />
        <aIcon class="icon" name="personal" />
      </div>
    </header>
    <RunningNum class="nums" :num="num" />
    <section :class="`main-${cssLayout}`">
      <aside class="aside"></aside>
      <article class="contain"></article>
    </section>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {
      num: "25320",
      //  normal ,  aside , dubAside
      cssLayout: "normal",
    };
  },
  mounted() {
    setInterval(() => {
      // 10000 到 99999 取值
      this.num = Math.floor(Math.floor(Math.random() * 90000) + 1) + 9999 + "";
    }, 1000);
  },
};
</script>

<style lang="less" scoped>
.nums {
  /* height: 100px;
   width: 50px; */
  color: #fff;
  font-size: 14px;
}
.app {
  height: 100%;
  .head {
    padding: 0 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left-icons,
    .right-icons {
      color: #fff;
      .icon {
        margin: 10px;
        font-size: 20px;
      }
    }
    
  }
}

.main-aside,
.main-normal,
.main-dubAside {
  //  要实现响应式布局
  box-sizing: border-box;
  width: 100%;
  position: fixed;
  top: 50px;
  bottom: 0px;
  left: 0;
  right: 0;
  border: 1px solid #fff;
}
.main-normal {
  .aside {
    display: none;
  }
}
.main-aside {
  .aside {
    display: block;
  }
}
.main-dubAside {
  .aside {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
  }
}
</style>
