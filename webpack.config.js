var nodeExternals = require('webpack-node-externals');
var path = require('path');

module.exports = {
  entry: './App.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'App.bundle.js'
  },
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};
