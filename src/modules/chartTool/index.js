import * as Echart from "echarts";

export function drawChart(dom, option) {
    const eChart = Echart.init(dom);

    eChart.setOption(option);
    return (ops) => {
        eChart.setOption(ops);
    };
}
