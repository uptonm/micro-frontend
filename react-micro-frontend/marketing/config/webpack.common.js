const {join} = require("path");

module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: join(__dirname, "../node_modules/"),
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react", "@babel/preset-env"],
                        plugins: ["@babel/plugin-transform-runtime"]
                    }
                }
            }
        ]
    }
}