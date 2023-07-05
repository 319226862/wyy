const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭语法自动检查
  lintOnSave: false,
  // 开启代理服务器（1）
  // devServer:{
  //   proxy:'http://localhost:5000'
  // }
  // 开启代理服务器（2）
  devServer:{
    proxy:{
      ws: false,
      '/api':{
        target:'http://localhost:5000',
        pathRewrite:{'^/api':''}
        // ws:true,
        // changeOrigin: true
      },
      '/bus':{
        target:'http://localhost:5001',
        pathRewrite:{'^/bus':''}
        // ws:true,
        // changeOrigin: true
      },
    }
  }
})
