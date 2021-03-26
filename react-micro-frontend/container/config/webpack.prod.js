const {merge} = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const commonConfig = require("./webpack.common.js");
const pkg = require("../package.json");

const domain = process.env.PROD_URI;

const prodConfig = {
    mode: "production",
    output: {
        filename: "[name].[contenthash].js",
        publicPath:  "/container/latest"
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "marketing",
            shared: pkg.dependencies,
            filename: "remoteEntry.js",
            remotes: {
                "marketing": `marketing@${domain}/marketing/remoteEntry.js`
            }
        })
    ]
}

module.exports = merge(commonConfig, prodConfig);