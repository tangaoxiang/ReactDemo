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
    plugins: [htmlWebPackPlugin]
}