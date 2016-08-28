const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: {
    /**
     * Modules, individually listed
     */
    footer: './src/modules/footer/index.jsx',
    navigation: './src/modules/navigation/index.jsx',

    /**
     * vendor libs and common webpack runtime
     */
    common: [
      'react',
      'react-dom',
    ],
  },

  output: {
    path: path.join(__dirname, '/build'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[chunkhash].chunk.js',
    publicPath: '/build/',
    libraryTarget: 'umd',
    library: ['Modules', '[name]'],
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
    ],
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin({
      filename: 'common.[chunkhash].js',
      name: 'common',
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: { warnings: false },
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: false,
    }),
  ],
};
