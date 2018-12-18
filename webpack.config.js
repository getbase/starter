const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')

module.exports = {
  entry: ['./src/js/default.js', './src/scss/styles.scss'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'default.js',
    libraryTarget: 'umd'
  },
  devtool: 'source-map',
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
    new CopyWebpackPlugin([ { from: './src/img/', to: 'img' } ], {}),
    new UglifyJSPlugin(),
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        collapseWhitespace: true,
        removeAttributeQuotes: false
      },
      inlineSource: '.(js|css)$'
    }),
    new HtmlWebpackInlineSourcePlugin(),
    new CleanWebpackPlugin(['dist']),
    new webpack.optimize.ModuleConcatenationPlugin(),
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