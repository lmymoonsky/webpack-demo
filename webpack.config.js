const webpack = require('webpack');
const path = require('path');

var htmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer')

module.exports = {
    entry:{
        main:'./src/app.js',
    },
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename:'js/[name].bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:path.resolve(__dirname, 'node_modules'),
                include:path.resolve(__dirname, 'src'),
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test:/\.css$/,
                use:[
                    {
                        loader:'style-loader',
                        options:{
                            sourceMap:true
                        }
                    },
                    {
                        loader:'css-loader',
                        options:{
                            module:true,
                            // importLoaders: 1
                        },
                    },
                    {
                        loader:'postcss-loader',
                        options:{
                            sourceMap:true,
                            plugins:()=>[autoprefixer],
                        }
                    }
                ]
            },
            {
                test:/\.less$/,
                use: [
                        {
                        loader:'style-loader'
                    },
                    {
                        loader:'css-loader'
                    },
                    {
                        loader:'postcss-loader'
                    },
                    {
                        loader:'less-loader'
                    }
                ]
            },
            {
                test:/\.html$/,
                use:[
                    {
                        loader:'html-loader'
                    }
                ]
            },
            {
                test:/\.ejs$/,
                use:[
                    {
                        loader:'ejs-loader'
                    }
                ]
            },
            // {
            //     test:/\.(png|jpg|svg|gif)$/i,
            //     use:[
            //         {
            //             loader:'file-loader',
            //             options:{
            //                 name:'assets/[name]-[hash:5].png',
            //             }
            //         }
            //     ]
            // },
            {
                test:/\.(png|jpg|svg|gif)$/i,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:20000, //小于20k 生成base64 编码格式，大于20k 由file-loader处理
                            name:'assets/[name]-[hash:5].[ext]',
                        }
                    },
                    // {
                    //     loader: 'image-webpack-loader'
                    // }
                ]
            }
        ],
    },
    plugins:[
        new htmlWebpackPlugin({
            filename:'index.html',
            template:'index.html', //路径 为什么指定 index.html 就是根目录下的index.html 文件
            inject:'body',
        }),
    ]
}