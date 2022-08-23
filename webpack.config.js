// webpack.config.js
const path = require('path');
// путь к источнику 
const pathSrc = path.resolve(__dirname, './app/');
// путь к папке билда
const pathDest= path.resolve(__dirname, './codejam/');

// Создает html c подключенным js 
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Очищает выходной каталог при каждом запуске сборщика webPack
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// Копирование файлов без обработки
const CopyPlugin = require('copy-webpack-plugin');
// Сжатие JS
const TerserPlugin = require("terser-webpack-plugin");
// Отдельный файл css
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//  Минификация css
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        "js/main.bundle.min.js": pathSrc + '/js/index.js',
    },
    output: {
        path: pathDest,
        filename: '[name]',
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin(),  new CssMinimizerPlugin()],
      },
    module: {
        rules: [
            // JavaScript
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            // css
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
              }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: pathSrc + '/index.html', // шаблон
            inject: 'body',
            filename: 'index.html', // название выходного файла
        }),
        new CleanWebpackPlugin(),
        //new CopyPlugin({
        //    patterns: [
        //    { from: pathSrc +"/images", to: "images", },
        //    { from: pathSrc + "/fonts", to: "fonts" },
        //    { from: pathSrc + "/assets", to: "assets" },
        //  ]
        //}),
        new MiniCssExtractPlugin({
            filename: 'css/style.min.css',
          }),
    ],
    devtool: 'inline-source-map',
    devServer: {
        compress: true,
        port: 3030,
        open: true,
        hot: true, 
        client: {
            logging: 'info',
            progress: true,
            overlay: {
                errors: true,
                warnings: false,
              },
          },  
      },
}