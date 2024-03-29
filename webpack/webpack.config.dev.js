/* eslint-disable no-undef */
'use strict'

const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

const HOST = 'localhost'
const PORT = 8081

module.exports = merge(baseConfig, {
  mode: 'development',

  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    contentBase: 'dist',
    compress: true,
    host: HOST,
    port: PORT,
    open: true,
    overlay: { warnings: false, errors: true },
    publicPath: '/',
    quiet: true
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }, {
        test: /\.s[a|c]ss$/,
        loader: [
        'vue-style-loader',
        'css-loader',
        'sass-loader'
      ]
    }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
