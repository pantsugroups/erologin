const devServer = {
  host: "0.0.0.0",
  port: 8080
};
const vueConf = {
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "public", // default: static
  productionSourceMap: false, // default: true
  crossorigin: "use-credentials" // default: undefined
};
const pages = {
  index: {
    entry: 'src/main.js',
    template: 'public/index.html',
    filename: 'index.html',
    title: '用户中心'
  }
}

module.exports = {
  ...vueConf,
  devServer,
  pages
};
