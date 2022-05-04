<template>
  <ul class="navigatorList">
    <li v-for="(item, index) in navigatorList" :key="index" class="navItem">
      <router-link class="routeLink" :to="item.url">{{
        item.routeName
      }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  data: function () {
    return {
      navigatorList: [
        {
          routeName: "帮助中心",
          url: "/help",
        },
        {
          routeName: '首页',
          url: '/'
        }
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.navigatorList {
  padding: 100px 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 800px;

  .navItem,
  .routeLink {
    color: #000;
    display: block;
    background: #fff;
    border-radius: 5px;
    width: 200px;
    height: 100px;
  }
}
</style>
>
