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
  },

  output: {
    path: path.join(__dirname, '/build'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[chunkhash].chunk.js',
    publicPath: '/build/',
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

  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin({
      filename: 'common.[chunkhash].js',
      name: 'common',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
    }),
    new HtmlWebpackPlugin({
      template: './src/modules/index.html',
      inject: false,
    }),
  ],
};
