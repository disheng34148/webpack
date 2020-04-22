const path = require('path');
const base = require('./webpack.base.config.js');
const webpack = require('webpack');
const merge = require('webpack-merge');
const resolve = dir => path.resolve(__dirname, '../src/', dir);

module.exports = merge(base, {
    entry: [
        'react-hot-loader/patch',
        resolve('index.js')
    ],
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        allowedHosts: ['cimu34148.cn','127.0.0.1'],
        contentBase: resolve('../dist'),
        open: true,
        port: 8080,
        compress: true,
        overlay: true,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})