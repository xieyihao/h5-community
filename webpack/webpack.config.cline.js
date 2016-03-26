var path = require("path");
var webpack = require('webpack');
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var Clean = require("clean-webpack-plugin");

var rootDir = path.join(__dirname, "..");


module.exports = {
  context: path.join(rootDir, "app"),
  entry:{
    app:"./app-dev",
    lib: ["react", "react-dom", "react-router", "history", "react-redux", "zepto-modules", "js-cookie"]
    // vendors:['classnames', 'iso', 'react', 'react-dom', 'react-helmet', 'react-router', 'react-hot-loader']
  },
  output:{
    path: path.join(rootDir, "build"),
    filename: '[name].js',
    publicPath: "/"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
      { test: /\.(jpe?g|png|gif|svg|woff|eot|ttf)$/, loader: 'url?limit=1&name=assets/img/[sha512:hash:base64:7].[ext]' },
      { test: /\.json$/, loader:'file-loader?name=./[path][name].[ext]'}
    ]
  },
  plugins:[
    new Clean(['build'], rootDir),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin('lib', 'lib.js'),
    new webpack.optimize.UglifyJsPlugin({warnings: false, minimize: true, sourceMap: false}),
    new ExtractTextPlugin("css/styles.css"), //提取CSS. http://npm.taobao.org/package/extract-text-webpack-plugin
    new CopyWebpackPlugin([
      {from :"../assets/img/i-doctor-head-default.png", to: "../build/assets/img/i-doctor-head-default.png"},
      {from :"../assets/img/i-payway-alipay.png", to: "../build/assets/img/i-payway-alipay.png"},
      {from :"../assets/img/i-payway-orther.png", to: "../build/assets/img/i-payway-orther.png"},
      {from :"../assets/img/i-payway-wx.png", to: "../build/assets/img/i-payway-wx.png"},
      {from :"../assets/img/icon/icon-lecture.png", to: "../build/assets/img/icon/icon-lecture.png"},
      {from :"../assets/img/icon/icon-local.png", to: "../build/assets/img/icon/icon-local.png"},
      {from :"../assets/img/icon/icon-log.png", to: "../build/assets/img/icon/icon-log.png"},
      {from :"../assets/img/icon/icon-me.png", to: "../build/assets/img/icon/icon-me.png"},
      {from :"../assets/img/icon/icon-mec.png", to: "../build/assets/img/icon/icon-mec.png"},
      {from :"../assets/img/icon/log.png", to: "../build/assets/img/icon/log.png"},
      {from :"../assets/img/banners/ad_01032016.jpg", to: "../build/assets/img/banners/ad_01032016.jpg"},
      {from :"../assets/img/banners/ad_11032016.jpg", to: "../build/assets/img/banners/ad_11032016.jpg"},
      {from :"../assets/img/banners/ad_21032016.png", to: "../build/assets/img/banners/ad_21032016.png"},
      {from :"../assets/img/collect.png", to: "../build/assets/img/collect.png"}
      ])
  ]
}
