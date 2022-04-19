<template>
    <div>
        <el-row class="tac">
            <el-col>
                <el-menu unique-opened :default-active="routeId">
                    <AsideNavItem :currentId="routeId" :menus="menus" />
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import AsideNavItem from "./AsideNavItem";
import { mapState } from "vuex";
export default {
    name: "HelloWorld",
    props: {
        msg: String,
    },
    components: {
        AsideNavItem,
    },
    computed: {
        ...mapState(["routeId", "menus"]),
    },
    methods: {
        //  处理 函数
        handle(arr) {
            const cloneRoute = (arr) => {
                return arr.map((ele) => {
                    const pathItem = (item) => {
                        let obj = {};
                        obj["name"] = item["name"];
                        obj["url"] = item["url"];
                        obj["icon"] = item["icon"];
                        obj["id"] = item["id"];
                        if (item["submenu"]) {
                            obj["subMenu"] = cloneRoute(item["submenu"]);
                        }
                        return obj;
                    };
                    return pathItem(ele);
                });
            };

            let menus = cloneRoute(arr);
            this.$store.commit("saveMenus", menus);
        },
    },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
