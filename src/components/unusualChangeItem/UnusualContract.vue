<template>
  <div class="item">
    <div class="contractInfo">
      <div class="contractTitle">
        <span>
          {{ contract.contractName }}
        </span>
        <span :class="['percent', contract.riseAndFall ? 'rise' : 'fall']">
          {{ contract.contractPercent }}
        </span>
      </div>
      <p :class="['currentPrice', contract.riseAndFall ? 'rise' : 'fall']">
        {{ contract.contractPrice }}
      </p>
    </div>
    <div class="quotationMap">市场行情图</div>
  </div>
</template>

<script>
export default {
  name: "unusual-contract",
  props: {
    contract: {
      type: Object,
    },
  },
};
</script>

<style lang="less">
.item {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 8px 5px;
  .contractInfo {
    .contractTitle {
      font-size: 16px;
      font-weight: bold;
      line-height: 16px;
      color: #fff;
      margin-bottom: 5px;
      .percent {
        font-size: 18px;
        margin-left: 10px;
      }
    }
    .rise {
      color: red;
    }
    .fall {
      color: green;
    }
    .currentPrice {
      font-size: 23px;
      line-height: 25px;
      font-weight: 550;
    }
  }
}
</style>
