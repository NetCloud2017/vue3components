<script>
import * as Echarts from "echarts";
import { fetchData } from "../../api";
import { defineComponent, onMounted, ref, nextTick } from "vue";

let myChart = null;
export default defineComponent({
    name: "unusual-contract",
    props: {
        contract: {
            type: Object,
        },
    },
    emits: ["getFutures"],
    setup() {
        let quotationMap = ref(null);
        onMounted(() => {
            fetchData({
                url: "futures_zh_spot",
                data: {
                    subscribe_list: "P2209",
                    market: "CF",
                    adjust: "0",
                },
            }).then((res) => {
                console.log(res, "dat222a");
            });
            nextTick(() => {
                myChart = Echarts.init(quotationMap.value);
                myChart.setOption({
                    backgroundColor: "rgba(255,255,255, 0.3)",
                    grid: {
                        //  xy 轴位置
                        left: 0,
                        // right: 0,
                        // height: "100%",
                        bottom: 0,
                    },
                    xAxis: {
                        type: "category",
                        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                        show: false,
                        boundaryGap: false,
                    },
                    yAxis: {
                        type: "value",
                        splitLine: false,
                        min: 0,

                        max: 1330,
                        show: false,
                        left: 0,
                    },
                    series: [
                        {
                            symbol: "none", // 去除 横向线。
                            data: [820, 932, 901, 934, 1290, 1330, 1320],
                            type: "line",
                            smooth: true,
                            itemStyle: {
                                normal: {
                                    lineStyle: {
                                        width: 0.5, // 0.1的线条是非常细的了
                                        color: "red",
                                    },
                                },
                            },
                        },
                    ],
                });
            });
        });

        return {
            quotationMap,
        };
    },
    methods: {
        emitItem() {
            this.$emit("getFutures", this.contract);
        },
    },
});
</script>

<template>
    <div class="item" @click="emitItem">
        <div class="contractInfo">
            <div class="contractTitle">
                {{ contract.contractName }}
                <span class="futuresCode">{{ "p2209" }}</span>
            </div>
            <span :class="['percent', contract.riseAndFall]">
                {{ `${contract.contractPercent} %` }}
            </span>
            <p :class="['currentPrice', contract.riseAndFall]">
                {{ contract.contractPrice }}
            </p>
        </div>
        <div ref="quotationMap" class="quotationMap"></div>
    </div>
</template>

<style lang="less">
.item {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    text-align: center;
    margin-bottom: 10px;
    .contractInfo {
        color: #fff;
        min-width: 110px;
        .contractTitle {
            font-size: 16px;
            font-weight: bold;
            line-height: 16px;
            margin-bottom: 5px;
            .futuresCode {
                font-size: 12px;
            }
        }
        .percent {
            font-size: 15px;
            font-weight: 600;
            margin-left: 10px;
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
        height: 100px;
    }
}
</style>
