const path = require('path');
const htmlWebPackPlugin = require('html-webpack-plugin') // 导入 在内存中自动生成index页面的插件 ，自动打包好的js文件追加入index中
const htmlPlugin = new htmlWebPackPlugin({
    template: path.join(__dirname, '../dist/index.html'), // 源文件
    filename: 'index.html'  // 生成内存中首页的名称
})

module.exports = {

    /*入口*/
    // entry: path.join(__dirname, '../src/index.js'),
    mode: 'development', // development
    plugins:[
        htmlPlugin
    ],
    /*输出到dist目录，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, '../src')
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        compress: true,  // gzip压缩
        host: '0.0.0.0', // 允许ip访问·
        progress: true,//显示进度·
        hot: true, // 热更新
        open: true,//编译默认打开浏览器
        historyApiFallback: true, // 解决启动后刷新404
        port: 8000, // 端口
        proxy: { // 配置服务代理
            '/api': {
                target: 'http://localhost:8000',
                pathRewrite: { '^/api': '' },  //可转换
                changeOrigin: true
            }
        },
    },
    devtool: 'inline-source-map',
    resolve: {
        alias: {
            pages: path.join(__dirname, '../src/pages'),
            components: path.join(__dirname, '../src/components'),
            router: path.join(__dirname, '../src/router'),
            actions: path.join(__dirname, '../src/redux/actions'),
            reducers: path.join(__dirname, '../src/redux/reducers')
        }
    },

};