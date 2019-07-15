

const path = require("path")



module.exports = {
    entry: [
        "@babel/polyfill",
        path.resolve(__dirname,"../","redux-demo/main.js")
    ],
    output: {
        path:path.resolve(__dirname,"../","redux-demo"),
        filename: "app.bundle.js"
    },
    resolve: {
        extensions: [".css",".js",".jsx"]
    },
    module: {
        rules: [

            {
                test:/\.jsx$/,loader:"babel-loader",
                query:{
                    presets:["@babel/preset-env","@babel/preset-react"],
                }
            },
            {
                test:/\.js$/,loader:"babel-loader",
                query:{
                    presets:["@babel/preset-env","@babel/preset-react"],
                }
            },
            {
                test:/\.css$/,
                loader:"style-loader!css-loader"
            }
        ]
    },
    plugins: [

    ]
}
