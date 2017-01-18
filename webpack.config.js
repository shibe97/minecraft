var webpack = require('webpack');

module.exports = {
  context : __dirname,
  entry : {
    index : './src/index.js',
  },
  output : {
    path : './dist',
    filename : '[name].js',
  },
  module : {
    loaders : [
      {
        test : /\.js$/,
        loader : 'babel',
        exclude : /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  }
};
