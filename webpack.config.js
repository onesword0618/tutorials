let debug   = process.env.NODE_ENV !== "production";
let webpack = require('webpack');
let path    = require('path');

module.exports = {
  context: path.join(__dirname, "src"),
  entry: "./index.js",
  module: {
    rules: [{
      test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }]
      }]
    },
    output: {
      path: __dirname + "/dist/",
      filename: "build.js"
    },
    plugins: debug ? [] : [
      new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ]
};