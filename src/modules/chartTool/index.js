import { createChart } from "lightweight-charts";

export function initChart(container, options) {
    let chartInstance = createChart(container);
    return chartInstance;
}
