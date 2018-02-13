var config = require('./webpack.config');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
  hot: true,
  inline: true,
  proxy: {
      '/event/*': {
      target: 'http://10.173.41.182:8080/',
      changeOrigin: true,
      secure: false
    }
  }
});

server.listen(8888);
