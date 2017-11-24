var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name]-bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['env']
                },
                exclude: path.resolve(__dirname, 'node_modules'),
                include:[
                    path.resolve(__dirname, 'src')

                ]
            },
            {
                //安装 npm install style-loader css-loader --save-dev
                //postcss的插件  npm install autoprefixer --save-dev
                test: /\.css$/,
                loader: 'style-loader!css-loader?importLoaders=1!postcss-loader',//从右向左
                include:[
                    path.resolve(__dirname, 'src')
                ]
            },
            {
                //npm install less --save-dev
                //安装npm i less-loader --save-dev
                test: /\.less$/,
                loader: 'style-loader!css-loader?importLoaders=1!postcss-loader!less-loader'
            },
            {
                //万物皆可引
                //npm install html-loader --save-dev
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                //纯html 模板比较少
                //一般要用到模板引擎
                //npm install ejs-loader --save-dev
                test: /\.tpl$/,
                loader: 'ejs-loader'
            },
            //{
            //    //图片等资源引入
            //    //npm install file-loader --save-dev
            //    //注意组件中引入图片
            //    //相对路径 $(require('../../assets/bg.png'))
            //    test: /\.(png|jpg|gif|svg)$/i,
            //    loader: 'file-loader',
            //    //控制图片输出的目录
            //    query: {
            //        name: 'assets/[name]-[hash:5].[ext]'
            //    }
            //
            //},
            //{
            //    //npm install url-loader --save-dev
            //
            //
            //    //相对路径 $(require('../../assets/bg.png'))
            //    test: /\.(png|jpg|gif|svg)$/i,
            //    loader: 'url-loader',
            //    //控制图片输出的目录
            //    query: {
            //        limit: 10000,
            //        name: 'assets/[name]-[hash:5].[ext]'
            //    }
            //},
            {
                //npm install image-webpack-loader --save-dev
                //test: /\.(png|jpg|gif|svg)$/i,
                //loaders: [
                //    'url-loader?limit=10000&name=assets/[name]-[hash:5].[ext]',
                //    'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
                //]
                test: /\.(gif|png|jpe?g|svg)$/i,
                loaders: [
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                    //'image-webpack-loader?{optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}, mozjpeg: {quality: 65}}'
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body'
        })
    ]
}