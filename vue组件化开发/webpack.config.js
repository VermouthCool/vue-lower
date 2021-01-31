const path = require('path');
const htmlwebpackplugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { webpack ,HotModuleReplacementPlugin} = require('webpack');
module.exports={
    mode:'development',
    entry:{
        app:path.resolve(__dirname,'src/index.js')
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'js/[name].bundle.js',//这里面得写相对路径,
        publicPath:'/'
    },
    module:{//模块加载器
        rules:[
            {
                test:/\.less$/, //正则匹配所有的less文件
                use:[
                    {
                        loader:'vue-style-loader' //用于在html文档内创建一个style标签将style样式塞进去
                    },
                    {
                        loader:'css-loader' //将less编译成的css转换为一个模块
                    },
                    {
                        loader:'less-loader' //这三个的顺序只能这样  不生成单独的文件在内存里
                    }
                ],
             },//解析less,
             {
                test: /\.css$/,
                // use: ['style-loader', 'css-loader'],
                // options:{
                //     name:'/css/[name].css'
                // }
                use:[
                    {
                        loader:'style-loader'
                    },
                    {
                        loader:'css-loader',
                        
                    }
                ]
             },
             {
                 test:/\.js$/,//只检验js文件
                 exclude:/node_modules/,//排除这些文件
                 enforce:'pre',
                 use:{
                     loader:'eslint-loader'
                 }
             },
             //npm i babel-loader @babel/core @babel/preset-env -D
             {
                test:/\.js$/,
                exclude:/node_module/,
                loader:'babel-loader',
                options:{
                        "presets":[["@babel/preset-env",
                        {
                            "useBuiltIns":"usage",
                            "debug": true,
                            "corejs":{version:3},
                            targets:{
                                "chrome":"53",
                                "ie":"9"
                            }
                        },
                    ],
                    
                    ],//只能处理简单的es6语法
                    plugins:[["babel-plugin-component", 
                        {
                          "libraryName": "mint-ui",
                          "style": true
                        }
                      ]]
                    }
             },
             //处理样式文件的图片
             {
                 test:/\.(png|jpg|gif)$/i,
                 use:[
                     {
                         loader:'file-loader',
                         options:{
                             limit:8192,//8kb以上不转base64 以下转
                             publicPath:'/image',
                             outputPath:'image',
                             name:'[hash:5].[ext]'
                         }
                     }
                 ]
             },
             //打包html文件
             //使用html-loader处理标签资源 img
             {
                 test:/\.html$/i,
                 loader:'html-loader'
             },
             //处理其他的资源
             {
                 test:/\.(eot|svg|woff|woff2|mp3|mp4|ttf|avi)/i,
                 loader:"file-loader",
                 options:{
                     outputPath:'media',
                     name:'[hash:4],[ext]'//把css的ziti后缀改成less
                 }
             },
             {
                 test:/\.vue$/,
                 loader:'vue-loader'
             }
        ]
    },
    plugins:[
        new htmlwebpackplugin({
            template:'index.html',
            filename:'index.html'//生成的文件名 得使用index.html
        }),
        new VueLoaderPlugin(),
        new HotModuleReplacementPlugin()
    ],
    devServer:{
        open:true,//自动打开浏览器
        // quiet:true,//不要再输出打包过程了，
        hot:true,
        proxy:{
            //'/api':'http://localhost:4000' //表示只要以/开头就发到这个
            '/api':{
                target:'http://localhost:4000',
                pathRewrite:{'^/api':''}
            },
            changeOrigin:true//如果协议也不相同
        },
        historyApiFallback:true
    },
    devtool:'cheap-module-eval-source-map',
    resolve:{
        extensions:['.js','.vue','.json'],//可以省略的扩展名
        alias:{//路径别名
            'vue$':'vue/dist/vue.esm.js',//表示精确匹配
            '@':path.resolve(__dirname,'src') 
        }
    }
}