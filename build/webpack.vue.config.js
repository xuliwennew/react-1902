

const path = require("path")
const {VueLoaderPlugin} = require("vue-loader")


module.exports = {
    entry: path.resolve(__dirname,"../","jsx-vue/main.js"),
    output: {
        path:path.resolve(__dirname,"../","jsx-vue"),
        filename: "app.bundle.js"
    },
    resolve: {
        extensions: [".css",".js",".vue",".jsx"]
    },
    module: {
        rules: [
            {test:/\.vue$/ ,loader:"vue-loader"},
            {test:/\.js$/,loader:"babel-loader",query:{presets:["@vue/babel-preset-jsx"]}}
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}
