<script>
import { fetchData } from "../../api";
import { defineComponent, onMounted, ref } from "vue";

// let myChart = null;
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
