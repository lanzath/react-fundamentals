const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'transpiled', 'index.js'), // input file
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle[hash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({ // plugin to generate html with bundle js import
      template: path.resolve(__dirname, 'public', 'index.html')
    }),
    new CleanWebpackPlugin() // plugin to cleanup previous bundles
  ]
};
