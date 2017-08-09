var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {test: /\.(js)$/, exclude: /node_modules/, use: 'babel-loader'},
      {test: /\.scss$/, use: ['style-loader','css-loader','sass-loader']}
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    stats: "errors-only"
  },
  plugins: [new HtmlWebpackPlugin ({
    minify: {
      collapseWhitespace: true
    },
    template: 'src/index.html'
  })]
}
