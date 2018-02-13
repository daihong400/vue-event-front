var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      { // 增加加载字体的规则
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: "file-loader?&name=fonts/[name].[ext]?[hash]"
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader?&name=img/[name].[ext]?[hash]"
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      "window.jQuery": "jquery"
    }),
    new htmlWebpackPlugin({
      filename:'index.html',
      template: './index.html',
      // favicon:'1.png',
      hash:true
    })
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'jquery': 'jquery'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  // devtool: '#eval-source-map'
}


console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'production') {
  // module.exports.devtool = '#source-map';
  module.exports.output.publicPath = '/event/dist/';
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    // new webpack.optimize.CommonsChunkPlugin('common.js'),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: "vendor",
    //   minChunks: 2
    // }),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      "window.jQuery": "jquery"
    }),
  ])
}
