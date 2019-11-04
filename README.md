# webpack4 react项目模板(仅供学习，webpack配置文件有注释)

1. 内置antd、支持路由懒加载、scss/sass编译、jsx格式、图片和字体单独打包、gzip压缩、css抽离、es6转es5、打包后删除console、开发环境支持代码修改后浏览器局部刷新
2. 支持HappyPack代码，如果想体验可以把在config.js里设置happypack: true
3. 主要是看webpack配置 src里面的内容随意发挥

## 一. 别名(alias)

    @: assets/,
    @style: style/,
    @pages: pages/,
    @com: components/,

## 二. 第三方库处理

    1. react、react-dom、react-router-dom不被webpack打包 直接在html里引入cdn
    2. node_modules里的代码打包到vendor.js里
    3. antd单独打包成antd.js。antd支持按需引入组件

## 三. 优化

    1. 利用mini-css-extract-plugin从js中抽离css，减少js体积

    2. 利用optimize-css-assets-webpack-plugin压缩css文件

    3. progress-bar-webpack-plugin可以查看打包进度

    4. 生产环境使用terser-webpack-plugin删除console

    5. 使用webpack.IgnorePlugin减少moment打包时候的体积

    6. webpack4新特性cacheGroups打包node_modules里的代码并利用hash值缓存

    7. antd按需引入

    8. loader里面添加include和exclude提高打包时间
