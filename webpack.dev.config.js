var htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    //context:, //上下文环境的默认是
    entry:{
        main:'./src/js/main.js',
        a:'./src/js/a.js',
        b:'./src/js/b.js',
        c:'./src/js/c.js',
    },
    // ['./src/js/main.js','./src/js/a.js'],
    output:{
        path:path.resolve(__dirname, 'dist'),
        publicPath:'http://cdn.com/',
        // filename:'[name]-[hash].js'
        filename:'js/[name]-[chunkhash].js'
    },
    plugins:[
        // new htmlWebpackPlugin({
        //     // filename:'index-[hash].html',
        //     filename:'index.html',
        //     template:'index.html', //路径 为什么指定 index.html 就是根目录下的index.html 文件
        //     inject:false,
        //     title:'webpack is great',
        //     date: new Date(),
        //     minify:{
        //         removeComments:true,
        //         collapseWhitespace:true
        //     }
        // }),
        new htmlWebpackPlugin({
            filename:'a.html',
            template:'index.html', //路径 为什么指定 index.html 就是根目录下的index.html 文件
            inject:false,
            title:'this is a.html',
            // chunks:['main','a'],
            excludeChunks:['b','c']
            // date: new Date(),
            // minify:{
            //     removeComments:true,
            //     collapseWhitespace:true
            // }
        }),
        new htmlWebpackPlugin({
            filename:'b.html',
            template:'index.html', //路径 为什么指定 index.html 就是根目录下的index.html 文件
            inject:false,
            title:'this is b.html',
            excludeChunks:['a','c']
            // date: new Date(),
            // minify:{
            //     removeComments:true,
            //     collapseWhitespace:true
            // }
        }),
        new htmlWebpackPlugin({
            filename:'c.html',
            template:'index.html', //路径 为什么指定 index.html 就是根目录下的index.html 文件
            inject:false,
            title:'this is c.html',
            excludeChunks:['a','b']
            // chunks:['c']
            // date: new Date(),
            // minify:{
            //     removeComments:true,
            //     collapseWhitespace:true
            // }
        })
    ]
}