'use strict';
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
const helpers      = require('./helpers');

module.exports = webpackMerge(commonConfig, {
    mode: 'development',

    devtool: 'cheap-module-eval-source-map',

    output: {
        path: helpers.root('dist'),
        publicPath: '/',
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
    },

    optimization: {
        noEmitOnErrors: true
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: {
                            configFileName: helpers.root('tsconfig.json')
                        }
                    },
                    'angular2-template-loader',
                    'angular-router-loader'
                ],
                exclude: [/node_modules/]
            }
        ]
    },

    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
});const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');


module.exports = {
  mode: 'development',
  entry: {
    polyfills: "./src/polyfills.ts",
    vendor: "./src/vendor.ts",
    main: "./src/main.ts",
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  output: {
    path: path.resolve(__dirname, 'dist'), // output directory
    filename: "[name].js" // name of the generated bundle
  },
  module: {
    rules: [{
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: ['url-loader?limit=100000']
      },
      {
        test: /\.ts$/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.ts$/,
        enforce: "pre",
        loader: 'tslint-loader'
      },
      {
        test: /\.(css|scss)$/,
        loaders: ['to-string-loader', "style-loader", 'css-loader?sourceMap', 'sass-loader?sourceMap']
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
        },
      },
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      inject: "body"
    }),
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)/,
      path.resolve(__dirname, './src')
    ),
    new FilterWarningsPlugin({
      exclude: /System.import/
    })
  ],
  devtool: "source-map",
  devServer: {
    historyApiFallback: true
  }
};
