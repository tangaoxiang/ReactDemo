const htmlWebPack = require('html-webpack-plugin');
const path = require("path");

const htmlWebPackPlugin = new htmlWebPack(
    {
        template: path.join(__dirname, './src/index.html'),
        filename: 'index.html'
    }
    // ,
    // {
    //     template:path.join(__dirname,'./src/css/index.css'),
    //      filename:"index.css"
    // }
    );  

module.exports = {
    mode: "development", //production
    plugins: [htmlWebPackPlugin],
    module:{
        rules:[
            //babel解析jsx语法配置,排除node_modules目录
            {test:/\.js|jsx$/,use:'babel-loader',exclude:/node_modules/},
        ]
    },resolve:{
        extensions:['.js','.jsx','.json','.css','.less','.lass'], //导入时省略扩展名配置
        alias:{'@':path.join(__dirname,'./src')}, //@根目录设置
    }
}