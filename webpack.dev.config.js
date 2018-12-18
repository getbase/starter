const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackReloadPlugin = require('html-webpack-reload-plugin')
const LiveReloadPlugin = require('webpack-livereload-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: ['./src/js/default.js', './src/scss/styles.scss'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'default.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                sourceMap: true
              }
            },
            'sass-loader'
          ]
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 20000,
              fallback: 'file-loader',
              name: '[name].[ext]',
              outputPath: 'img'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
               progressive: true,
               quality: 50
             },
             optipng: {
                enabled: false,
              },
              gifsicle: {
                interlaced: false,
              },
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin(),
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      inject: true,
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new LiveReloadPlugin(),
    new HtmlWebpackReloadPlugin(),
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, './src'),
    watchContentBase: true,
    hot: true,
    open: true,
    port: 3000,
    watchOptions: {
      poll: true
    }
  }
}