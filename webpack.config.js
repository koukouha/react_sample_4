const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    './src/index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
       test: /\.js$/,
       exclude: /node_modules/,
       loader: "babel"
     },
   ],
 },
  resolve: {
    extensions: ['', '.js', '.json'],
  }
};
