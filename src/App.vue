<template>
  <div class="app">
    <header class="head">
      <!--   -->
      <div class="left-icons">
        <aIcon @click.stop="pageStyle('normal')" class="icon" name="fullLayout" />
        <aIcon @click.stop="pageStyle('aside')" class="icon" name="asideLayout" />
        <aIcon @click.stop="pageStyle('dubAside')" class="icon" name="dubAsideLayout" />
      </div>

      <div class="right-icons">
        <aIcon class="icon" name="menu" />
        <aIcon class="icon" name="personal" />
      </div>
    </header>
    <RunningNum class="nums" :num="num" />
    <section :class="`main-${cssLayout}`">
      <aside class="aside">
        <div class="analysis"></div>
        <div class="news"></div>
      </aside>
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
  methods: {
    pageStyle (style) {
      this.cssLayout = style
    }
  }
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
 display: flex; 
}
.main-normal {
  .aside {
    display: none;
  }
}
.main-aside, .main-dubAside{
  .aside {
    display: block;
    border-right: 1px solid #fff;
    height: 100%;
    min-height: 740px;
    max-width: 600px;
    min-width: 400px;
    flex-grow: 1;
    .analysis {
      display: none;
    }
  }
  .contain {
    height: 100%;
    min-width: 800px;
    flex-grow: 1;
  }
}

.main-dubAside {
  .aside {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    .analysis {
      display: block;
      flex-grow: 1;
    }
    .news {
      flex-grow: 1;
    }
  }
}
</style>
