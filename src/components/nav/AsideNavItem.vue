<template>
  <div>
      <template v-for="item in menus"> 
          <el-submenu 
            :key="item.id"
            v-if="item.subMenu"
            :index="item.id"
         >
                <template>
                    <i :class="item.icon"></i>
                    <span>{{item.name}}</span>
                </template>
                <AsideNavItem v-if="item.subMenu" :menus="item.subMenu"/>
                <el-menu-item
                    v-else
                    :key="item.id"
                    :class="{isActive: item.id === currentId}"
                    @click="linkTo(item)"
                    :index="item.id"
                >
                    <div>{{item.name}}</div>
                </el-menu-item>
          </el-submenu>
          <el-menu-item
                v-else
                :key="item.id"
                :class="{isActive: item.id === currentId}"
                @click="linkTo(item)"
                :index="item.id"
            >
                <div>{{item.name}}</div>
            </el-menu-item>
      </template> 
    <template>
  </div>
</template>
<script>
export default {
    name: 'AsideNavItem',
    props: ['menus' ,'currentId'],
    methods:{
        linkTo (path) {
            let {
                url,
                id,
                query,
            } = path;
            this.$store.commit('saveActive', id);
            if (!query) {
                query  = {}
            }
            this.$router.push({path: url, query: {...query}});
        }
    }
}
</script>
<style scoped lang="less" >

.isAcitve {
    color: red;
}
</style>