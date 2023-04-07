const { defineConfig } = require("@vue/cli-service");
const SpeedMeasureWebpackPlugin = require("speed-measure-webpack-plugin");
const swp = new SpeedMeasureWebpackPlugin({
    outputFormat: "humanVerbose",
});
module.exports = defineConfig({
    parallel: true,
    transpileDependencies: true,
    devServer: {
        host: "localhost",
        port: "8000",
    },
    configureWebpack: swp.wrap({
        resolve: {
            extensions: ["ts", "tsx"],
        },
    }),
});
