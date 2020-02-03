const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: ['./src/js/index.ts', './src/scss/index.scss'],
    test: ['./src/js/test.ts', './src/scss/test.scss']
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        })
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ExtractTextPlugin('[name].css'),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  }
}