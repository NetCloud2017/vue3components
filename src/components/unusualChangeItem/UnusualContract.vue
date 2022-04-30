<template>
  <div class="item">
    <div class="title">
      <span class="contractName">
        {{ contract.contractName }}
      </span>
      <p class="currentPrice">
        {{ contract.contractPrice }}
      </p>
    </div>
    <div class="quotationMap">市场行情图</div>
  </div>
</template>

<script>
export default {
   name: 'unusual-contract', 
  props: {
    contract: {
      type: Object,
    },
  },
};
</script>

<style></style>
