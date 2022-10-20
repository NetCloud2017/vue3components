<template>
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
                @2click.stop="pageStyle('dubAside')"
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
                            <router-link to="/navigatorCenter"
                                >导航中心</router-link
                            >
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
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
    emits: ["layoutStyle"],
    methods: {
        pageStyle(style) {
            this.$emit("layoutStyle", style);
        },
    },
});
</script>

<style lang="less" scoped>
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
</style>
>
