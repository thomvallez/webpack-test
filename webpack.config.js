const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const dev = process.env.NODE_ENV === "dev";

let config = {
  entry: './js/app.js',
  watch: dev,
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js',
    publicPath: "./dist/"
  },
  devtool: dev ? "cheap-module-eval-source-map" : "source-map",
  module: {
    rules: [
      {
        test: /\.js*$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
  ]
}

if (!dev) {
  config.plugins.push(new UglifyJSPlugin({
    sourceMap: true
  }))
}

module.exports = config
