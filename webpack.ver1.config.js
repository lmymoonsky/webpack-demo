var htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry:{
        main:'./src/app.js',
    },
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename:'js/[name].bundle.js'
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                exclude:path.resolve(__dirname, 'node_modules'),
                include:path.resolve(__dirname, 'src'),
                loaders:'babel-loader',
                query:{
                    presets:['latest']
                }
            },
            {
                test:/\.css$/,
                loader:'style-loader!css-loader!postcss-loader'
            }
        ],
    },
    postcss:[
        require('autoprefixer')({
            browsers:['last 5 versions']
        })
    ],
    plugins:[
        new htmlWebpackPlugin({
            filename:'index.html',
            template:'index.html', //路径 为什么指定 index.html 就是根目录下的index.html 文件
            inject:'body',
        }),
    ]
}