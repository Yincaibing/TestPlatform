module.exports = {
  chainWebpack: config => {
    config.plugins.delete('fork-ts-checker');
  },
  configureWebpack: {
    entry: './src/main.js'
  }
}