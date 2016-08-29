const path = require('path');
const webpack = require('webpack');

module.exports = {

  entry: './src/spa/index.jsx',

  output: {
    path: path.join(__dirname, '/build'),
    filename: 'spa.js',
    publicPath: '/build/',
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: [
          'style',
          'css',
        ],
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
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
    }),
  ],
};
