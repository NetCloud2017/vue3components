<template>
    <div class="app">
        <!-- <RunningNum class="nums" :num="num" /> -->
        <page-header
            @layoutStyle="
                (style) => {
                    cssLayout = style;
                }
            "
        />
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
            <main-module class="contain" />
        </section>
        <footer></footer>
    </div>
</template>

<script>
import UnusualContract from "@/components/unusualChangeItem/UnusualContract.vue";
import PageHeader from "./header/PageHeader.vue";
import MainModule from "./mian/MainModule.vue";
import { fetchData } from "../api";
export default {
    components: { UnusualContract, PageHeader, MainModule },
    name: "HomePage",
    data: function () {
        return {
            unusualContractList: [
                {
                    contractName: "棕榈油",
                    contractPrice: "13523",
                    contractPercent: "10.02",
                    // riseAndFall: 'rise' // fall
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
            this.num =
                Math.floor(Math.floor(Math.random() * 90000) + 1) + 9999 + "";
        }, 1000);

        fetchData({
            url: "futures_comm_info",
            data: {
                symbol: "所有",
            },
        }).then((res) => {
            console.log(res, "data");
        });
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
    height: 100vh;
    min-width: 1000px;
}

.main-normal,
.main-aside,
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
    .contain {
        flex-grow: 1;
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
        max-width: 520px;
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
