// Import dependacies
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Settings
const settings = {
  package: {
    path: './',
  },
  development: {
    path: './development/',
    alias: {
      styles: path.resolve(__dirname, './src/scss'),
      scripts: path.resolve(__dirname, './src/js')
    }
  }
}

// Build configs
const configs = [];
Object.values(settings).forEach(setting => {
  configs.push({
    mode: 'development',
    entry: {
      index: [
        path.resolve(__dirname, `${setting.path}src/js/index.ts`),
        path.resolve(__dirname, `${setting.path}src/scss/index.scss`),
      ],
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
          exclude: /node_modules/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                configFile: path.resolve(__dirname, `${setting.path}tsconfig.json`)
              },
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
      alias: setting.alias || {}
    },
    plugins: [
      new CleanWebpackPlugin(),
      new ExtractTextPlugin('[name].css'),
    ],
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, `${setting.path}dist`),
    }
  })
});

// Export config
module.exports = configs;