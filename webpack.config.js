var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'client/public');
var APP_DIR = path.resolve(__dirname, 'client/app');

var config = {
  entry: [APP_DIR + '/index.jsx', APP_DIR + '/components/hello.jsx'], // input file
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
   module : {
    loaders : [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2016', 'react']
        }
      }
    ]
  }

};

module.exports = config;
