const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const copyWebpackPlugin = require("copy-webpack-plugin");
const copyPlugin = new copyWebpackPlugin([{
    from: path.resolve(__dirname, "../favicon.ico"),
    to: './',
    ignore: ['.*']
}])
module.exports = merge(common, {
    mode: 'production',
    module: {
        rules: [

        ]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({//压缩js
                extractComments: false, // 是否将注释单独提出来一个文件
                cache: true,
                parallel: true,// 开启并行压缩，充分利用cpu
                sourceMap: false,
            }),
            new OptimizeCSSAssetsPlugin()//压缩css
        ],
        concatenateModules: true,
        splitChunks: {
            chunks: "async", 
            cacheGroups: {
                vendors: {//node_modules里的代码
                    test: /[\\/]node_modules[\\/]/,
                    chunks: "initial",
                    name: 'vendors',
                    priority: 10,
                    enforce: true //强制生成
                },
                commons: {
                    test: /[\\/]src[\\/]/,
                    name: 'commons',
                    minChunks: 2,
                    chunks: 'initial',
                    priority: -1,
                    maxInitialRequests: 5,
                    reuseExistingChunk: true, // 这个配置允许我们使用已经存在的代码块
                },
                material: {
                    name: 'material-ui', // 单独将 material-ui 拆包
                    priority: 20,
                    test: /[\\/]node_modules[\\/]@material-ui[\\/]/,
                    chunks: 'all',
                },
                // react: {
                //     name: 'react',
                //     priority: 30,
                //     test: /[\\/]node_modules[\\/](react|react-redux|redux｜react-router-dom｜axios)[\\/]/,
                //     chunks: 'all',
                // },
            }
        },
        // runtimeChunk: true,
    },

    plugins: [
        new CleanWebpackPlugin(),
        copyPlugin
    ]
})