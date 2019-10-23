const path = require('path');
const base = require('./webpack.base.config.js');
const webpack = require('webpack');
const merge = require('webpack-merge');
const resolve = dir => path.resolve(__dirname, '../src/', dir);

module.exports = merge(base, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: resolve('../dist'),
        open: true,
        port: 8080,
        compress: true,
        overlay: true,
        hot: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})