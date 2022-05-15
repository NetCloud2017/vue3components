<template>
  <div class="item">
    <div class="contractInfo">
      <div class="contractTitle">
        <span>
          {{ contract.contractName }}
        </span>
        <span :class="['percent', contract.riseAndFall]">
          {{ contract.contractPercent }}
        </span>
      </div>
      <p :class="['currentPrice', contract.riseAndFall]">
        {{ contract.contractPrice }}
      </p>
    </div>
    <div ref="quotationMap" class="quotationMap"></div>
  </div>
</template>

<script>
import * as Echarts from "echarts";
let myChart = null;
export default {
  name: "unusual-contract",
  props: {
    contract: {
      type: Object,
    },
  },
  setup() {},
  mounted() {
    this.$nextTick(() => {
      myChart = Echarts.init(this.$refs.quotationMap);
      myChart.setOption({
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      });
    });
  },
};
</script>

<style lang="less">
.item {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  // padding: 8px 5px;
  .contractInfo {
    color: #fff;
    .contractTitle {
      font-size: 16px;
      font-weight: bold;
      line-height: 16px;
      margin-bottom: 5px;
      .percent {
        font-size: 18px;
        margin-left: 10px;
      }
    }
    .rise {
      color: rgba(252, 22, 22, 1);
    }
    .fall {
      color: #15f711;
    }
    .currentPrice {
      font-size: 23px;
      line-height: 25px;
      font-weight: 550;
    }
  }
  .quotationMap {
    flex-grow: 1;
    height: 50px;
  }
}
</style>
