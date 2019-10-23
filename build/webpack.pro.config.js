const path = require('path');
const merge = require('webpack-merge');
const resolve = dir => path.resolve(__dirname, '../src/', dir);
const base = require('./webpack.base.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;// 查看项目打包体积
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');// 压缩css

module.exports = merge(base, {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: resolve('../public/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        new OptimizeCssAssetsPlugin(),
        new BundleAnalyzerPlugin(),
        // IgnorePlugin可以忽略第三方库的某个目录下的内容
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),// 忽略moment的locale(语言包)目录下的内容, 减小打包体积
    ]
})