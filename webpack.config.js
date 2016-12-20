var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  entry: './src/main',
  output: {
    path: './build',
    filename: 'main.js',
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue',
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
    ],
  },
  vue: {
    loaders: {
      js: 'babel',
    },
  },
  plugins: [
    new CleanWebpackPlugin(['build'], {
      root: '',
      verbose: true,
      dry: false,
      exclude: []
    }),
    new CopyWebpackPlugin([
      {from: './src/static/', to: './static/'}
    ],
    { ignore:['.DS_Store']}
  )
  ]
}
