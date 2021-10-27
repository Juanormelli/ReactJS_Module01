const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin')


const inDevelopment = process.env.NODE_ENV !== 'production'


module.exports = {
    mode: inDevelopment? "development":"poroduction",
    devtool:inDevelopment? "eval-source-map":"source-map",
    
    entry: path.resolve(__dirname, 'src', "index.jsx"),

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },

    resolve:{
        extensions:[".js", ".jsx"]
    },

    devServer: {
        static: path.resolve(__dirname, 'public'),
        hot:true
    },
    plugins:[
        inDevelopment&& new ReactRefreshPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', "index.html"),
        })
    ].filter(Boolean),
    

    module:{
        rules:[
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader:"babel-loader",
                    options:{
                        plugins:[
                            inDevelopment && require.resolve("react-refresh/babel")
                        ].filter(Boolean)
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader" ]

            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", "sass-loader"]

            }
        ],
    } 
}