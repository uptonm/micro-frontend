const {merge} = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const commonConfig = require("./webpack.common.js");
const pkg = require("../package.json");

const devConfig = {
    mode: "development",
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: "index.html"
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "marketing",
            shared: pkg.dependencies,
            filename: "remoteEntry.js",
            remotes: {
                "marketing": "marketing@http://localhost:8081/remoteEntry.js"
            }
        })
    ]
}

module.exports = merge(commonConfig, devConfig);