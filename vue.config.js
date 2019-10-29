module.exports = {
  // 关闭内置Eslint检查
  lintOnSave: false,
  // 打包输出路径
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',    //打包不用更改,本地和打包以后路径分开
  productionSourceMap: false,//不要打包以后的map文件-zwh
  devServer: {
    open: true, // 启动服务后是否打开浏览器
    host: '0.0.0.0',
    port: 8080, // 服务端口
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {//代理api
          target: "http://localhost:8080/account/admin",//服务器api地址
          changeOrigin: true,//是否跨域
          ws: false, // proxy websockets
          pathRewrite: {//重写路径
              "^/api": ''
          }
      }
  },// 设置代理
  before: app => {}
  },
}