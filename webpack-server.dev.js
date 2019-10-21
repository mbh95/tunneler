const merge = require('webpack-merge');
const common = require('./webpack-server.common.js');
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new NodemonPlugin(),
  ],
});