const path = require('path')

const resolve = dir => {
    return path.join(__dirname, dir)
}

// vue.config.js
module.exports = {
    // 部署生产环境和开发环境下的URL。
    baseUrl: "./",
    // 项目打包输出的文件夹名，默认为dist
    // outputDir: 'dist',
    // 用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
    // assetsDir: "assets",
    // 设置别名
    // chainWebpack: config => {
    //     config.resolve.alias
    //         .set('@', resolve('src'))
    // },
    // devServer: {
    //     host: 'localhost'
    //     // string | Object 代理设置
    //     // proxy: {
    //     //     // 接口是 '/repos' 开头的才用代理
    //     //     '/repos': {
    //     //         target: 'https://api.github.com', // 目标地址
    //     //         changeOrigin: true, // 是否改变源地址
    //     //         // pathRewrite: {'^/api': ''}
    //     //     }
    //     // },
    // }
}