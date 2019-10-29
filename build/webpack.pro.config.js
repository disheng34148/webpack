const path = require('path');
const merge = require('webpack-merge');
const resolve = dir => path.resolve(__dirname, '../src/', dir);
const base = require('./webpack.base.config.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');// 从js文件中提取css
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;// 查看项目打包体积
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');// 压缩css
const copyWebpackPlugin = require('copy-webpack-plugin');// 复制资源到指定目录
const ManifestPlugin = require('webpack-manifest-plugin');// 抽离manifest.json文件
const CompressionWebpackPlugin = require('compression-webpack-plugin');// 开启gzip压缩 版本问题降到1.1.12
const ProgressBarPlugin = require('progress-bar-webpack-plugin');// 显示打包时间
const HappyPack = require('happypack');// 大项目中使用，小项目使用反而构建速度慢

module.exports = merge(base, {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash:8].css'
        }),
        new OptimizeCssAssetsPlugin(),
        new BundleAnalyzerPlugin(),
        // IgnorePlugin可以忽略第三方库的某个目录下的内容
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),// 忽略moment的locale(语言包)目录下的内容, 减小打包体积
        new copyWebpackPlugin([{
            from: resolve('../public/favicon.ico'),
            to: resolve('../dist/favicon.ico')
        },{
            from: resolve('../static'),// 想不被webpack打包js、css文件要在html里引入，图片不能使用require方式引入
            to: resolve('../dist/static')// 路径要用 /static/**
        }]),
        new ManifestPlugin(),
        new CompressionWebpackPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp('\\.(js|css)$'),
            threshold: 10240,
            minRatio: 0.8
        }),
        new ProgressBarPlugin(),
        // new HappyPack({
        //     id: 'happyBabel',
        //     loaders: ['babel-loader']
        // }),
        // new HappyPack({
        //     id: 'happyCss',
        //     loaders: ['css-loader']
        // }),
        // new HappyPack({
        //     id: 'happySass',
        //     loaders: ['sass-loader']
        // })
        
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                antd: {
                    name: 'antd',
                    test: /[\\/]node_modules[\\/](antd)[\\/]/,
                    chunks: 'all',
                    priority: 20
                }
            }
        }
    }
})