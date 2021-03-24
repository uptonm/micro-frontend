const {merge} = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const commonConfig = require("./webpack.common.js");
const pkg = require("../package.json");

const prodConfig = {
    mode: "production",
    output: {
        filename: "[name].[contenthash].js"
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "marketing",
            shared: pkg.dependencies,
            filename: "remoteEntry.js",
            exposes: {
                "./MarketingApp": "./src/bootstrap"
            }
        })
    ]
}

module.exports = merge(commonConfig, prodConfig);