const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './main.js',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader',]
      },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      {
        test: /\.(png|jpg|gif|jpeg|bmp|webp)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 8192 }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['url-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ // 用于帮助我们自动生成HTML文件的
      template: './src/index.html', // 如果不指定template, 默认生成一个空的HTML5页面, 指定template表示从哪个HTML文件编译一个新的HTML出来
      filename: 'index.html' // 默认值就是index.html, 便于开发人员自己查看
    })
  ],
  devServer: {
    hot: true
  },
};