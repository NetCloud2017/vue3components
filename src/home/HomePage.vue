<template>
  <div class="app">
    <header class="head">
      <!--   -->
      <div class="left-icons">
        <aIcon
          @click.stop="pageStyle('normal')"
          class="icon"
          name="fullLayout"
        />
        <aIcon
          @click.stop="pageStyle('aside')"
          class="icon"
          name="asideLayout"
        />
        <aIcon
          @click.stop="pageStyle('dubAside')"
          class="icon"
          name="dubAsideLayout"
        />
      </div>

      <div class="right-icons">
        <el-dropdown>
          <span class="el-dropdown-link">
            <aIcon class="icon" name="menu" />
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <router-link to="/navigatorCenter">导航中心</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/help">使用帮助</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/advice">反馈建议</router-link>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <el-dropdown>
          <span class="el-dropdown-link">
            <aIcon class="icon" name="personal" />
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <router-link to="/signIn">登录</router-link>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </header>
    <!-- <RunningNum class="nums" :num="num" /> -->
    <section :class="`main-${cssLayout}`">
      <aside class="aside">
        <div class="contractAnalysis">
          <!-- 异动合约，  -->
          <!-- 当前大涨合约 -->
          <unusual-contract
            class="contractItem"
            v-for="(contract, index) in unusualContractList"
            :key="index"
            :contract="contract"
          />
        </div>
        <div class="news">
          <!-- 国内外新闻 -->
        </div>
      </aside>
      <article class="contain"></article>
    </section>
    <footer></footer>
  </div>
</template>

<script>
import UnusualContract from "@/components/unusualChangeItem/UnusualContract.vue";
export default {
  components: { UnusualContract },
  name: "HomePage",
  data: function () {
    return {
      unusualContractList: [
        {
          contractName: "棕榈油",
          contractPrice: "13523",
          contractPercent: "10.02%",
        },
      ],
      num: "25320",
      //  normal ,  aside , dubAside
      cssLayout: "aside",
    };
  },
  mounted() {
    setInterval(() => {
      // 10000 到 99999 取值
      this.num = Math.floor(Math.floor(Math.random() * 90000) + 1) + 9999 + "";
    }, 1000);
  },
  methods: {
    pageStyle(style) {
      this.cssLayout = style;
    },
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
  min-width: 1000px;
  .head {
    padding: 15px 30px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left-icons,
    .right-icons {
      .icon {
        color: #fff;
        margin: 10px;
        font-size: 20px;
        line-height: 40px;
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
.main-aside,
.main-dubAside {
  .aside {
    transition: all 2s linear;
    display: block;
    border-right: 1px solid #fff;
    height: 100%;
    min-height: 740px;
    max-width: 600px;
    min-width: 400px;
    flex-grow: 1;
    .news {
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
    .news {
      display: block;
      flex-grow: 1;
    }
    .contractAnalysis {
      flex-grow: 1;
    }
  }
}
</style>
