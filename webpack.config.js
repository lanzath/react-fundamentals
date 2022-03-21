const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.js'), // input file
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle[fullhash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({ // plugin to generate html with bundle js import
      template: path.resolve(__dirname, 'public', 'index.html')
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/, // Files must end exclusively ($) with ".js",
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  devServer: {
    port: 3000,
  }
};
