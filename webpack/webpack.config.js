var path = require("path");
var webpack = require('webpack');
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var Clean = require("clean-webpack-plugin");

var rootDir = path.join(__dirname, "..");


module.exports = {
  // context: path.join(rootDir, "app"),
  entry:{
    app: [
    'webpack-hot-middleware/client?noInfo=false&quiet=false&reload=true',
    './app/app-dev.js'],
    lib: ["react", "react-dom", "react-router", "history", "react-redux", "zepto-modules", "js-cookie"]

    // vendors:['classnames', 'iso', 'react', 'react-dom', 'react-helmet', 'react-router', 'react-hot-loader']
  },
  output:{
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    // publicPath: '/assets/'
    // path: path.join(rootDir, "build"),
    // filename: '[name].js',
    publicPath: "/build"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
      { test: /\.(jpe?g|png|gif|svg|woff|eot|ttf)$/, loader: 'url?limit=10000&name=assets/img/[sha512:hash:base64:7].[ext]' },
      { test: /\.json$/, loader:'file-loader?name=./[path][name].[ext]'}
      // { test: /\.json$/, loader:ExtractTextPlugin.extract("file-loader")}
    ]
  },
  plugins:[
    new Clean(['build/index.html'], rootDir),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // new webpack.optimize.CommonsChunkPlugin('lib', 'lib.js'),
    // new webpack.optimize.UglifyJsPlugin({warnings: false, minimize: true, sourceMap: false}),
    new ExtractTextPlugin("css/styles.css") //提取CSS. http://npm.taobao.org/package/extract-text-webpack-plugin
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: 'assets/index.html',
    //   host:'http://localhost:3081'
    // })
  ]
}
