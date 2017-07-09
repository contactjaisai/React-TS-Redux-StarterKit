var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {

  entry: {
    'app': './src/index.tsx'
  },
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },

  module: {
    rules: [
      {
        // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        test: /\.js$/,
        enforce: "pre",
        loader: "source-map-loader"
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw'
      },
    ],
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]

};