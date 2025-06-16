let path=require("path");
let HTMLWEBPACKPLUGIN=require("html-webpack-plugin");

module.exports={
    mode:"development",
    entry:"./main.js",
    output:{
        filename:"main.js",
        path:path.resolve(__dirname,"dist"),
        clean:true,
    },
    plugins:[
        new HTMLWEBPACKPLUGIN({
            template:"./index.html",
            filename:"index.html",
        })
    ],
    module:{
        rules:[
            {
            test: /\.html$/i,
            loader: "html-loader",
            }
        ],
    },

}