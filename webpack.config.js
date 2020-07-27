const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: path.resolve(__dirname, 'src/', 'index.jsx'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '',           // Provides public/assets as a path for all assets (img, fonts, media, etc) --> But no wtf !!
    },
    mode: 'development',
    devServer: {
        contentBase:  path.resolve(__dirname, 'public/'),
        port: 3000,
        historyApiFallback: true,   // Serves correct HTML5 History path. Avoid 404 when use history (browser's back btn)
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/', 'index.html'),       // Provides public/assets as a path for all assets (img, fonts, media, etc)
        }),
        new Dotenv()                    // allows to use .env variables
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']      // react-hot to hot reload
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.sass$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.html/,
                exclude: /node_modules/,
                use: ['html-loader']
            },
            {
                test: /\.(jpg|png|gif)$/,
                exclude: /node_modules/,
                use: ['file-loader'],
            }
        ]
    }
};
