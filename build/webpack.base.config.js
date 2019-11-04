const path = require('path');
const resolve = dir => path.resolve(__dirname, '../src/', dir);
const MiniCssExtractPlugin = require('mini-css-extract-plugin');// 从js文件中提取css
const isDev = process.env.NODE_ENV === 'development';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');// 复制资源到指定目录
const config = require('./config.js');

module.exports = {
    entry: {
        main: resolve('index.js')
    },
    output: {
        filename: 'js/[name].[hash:8].js',
        chunkFilename: 'chunks/[name].[chunkhash:8].js',
        path: resolve('../dist'),
    },
    // externals里面库不打包
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'react-router-dom': 'ReactRouterDOM'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@': resolve('assets/'),
            '@style': resolve('style/'),
            '@pages': resolve('pages/'),
            '@com': resolve('components/'),
            '@ant-design/icons/lib/dist$': resolve('icon.js') // 优化@ant-design/icons文件，按需引入icon
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: config.happypack ? 'happypack/loader?id=happyBabel' : 'babel-loader',
                include: resolve(''),
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                    config.happypack ? 'happypack/loader?id=happyCss' : 'css-loader'
                ]
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    isDev ? 'style-loader' : {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '/' // 解决打包后scss中引入图片路径问题
                        }
                    },
                    config.happypack ? 'happypack/loader?id=happyCss' : 'css-loader',
                    'postcss-loader',
                    config.happypack ? 'happypack/loader?id=happySass' : 'sass-loader'
                ],
                include: resolve('style/'),
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images/',
                        limit: 8192, //8kb
                        include: resolve('assets/'),
                        exclude: [/node_modules/, resolve('../static/')]
                    }
                }
            },
            {
                test: /\.(eot|ttf|svg|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'font/',
                        include: resolve('font/'),
                        exclude: /node_modules/
                    },
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: resolve('../public/index.html'),
            inject: 'body',
            hash: isDev ? false : true // development要取消hash
        }),
        new copyWebpackPlugin([{
            from: resolve('../public/favicon.ico'),
            to: resolve('../dist/favicon.ico')
        },{
            from: resolve('../static'),// 想不被webpack打包js、css文件要在html里引入，图片不能使用require方式引入
            to: resolve('../dist/static')// 路径要用 /static/**
        }]),
    ]
}