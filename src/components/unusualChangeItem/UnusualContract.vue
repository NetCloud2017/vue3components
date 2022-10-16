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
import { fetchData } from "../../api";
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
        this.$nextTick(() => {
            myChart = Echarts.init(this.$refs.quotationMap);
            myChart.setOption({
                backgroundColor: "rgba(255,255,255, 0.3)",
                xAxis: {
                    type: "category",
                    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                    show: false,
                    boundwaryGap: false,
                },
                yAxis: {
                    type: "value",
                    splitLine: false,
                    min: 820,

                    max: 1330,
                    show: false,
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
    },
};
</script>

<style lang="less">
.item {
    width: 100%;
    height: 100px;
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
        height: 100px;
    }
}
</style>
