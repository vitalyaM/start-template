const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const paths = require('./modules/assets/paths');

const entry = {
  main: path.join(__dirname, '..', paths.srcPath, 'js', `main.js`),
  index: path.join(__dirname, '..', paths.srcPath, 'js', `index.js`)
};

const config = (devMode) => {
  return {
    devtool: 'source-map',
    mode: devMode ? 'development' : 'production',
    entry: entry,
    output: {
      filename: '[name].min.js',
    },

    optimization: {
      minimizer: devMode
        ? [new webpack.SourceMapDevToolPlugin(), new webpack.NoEmitOnErrorsPlugin()]
        : [
          new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: false,
          }),
        ]
    },

    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
          query: {
            presets: ['@babel/preset-env'],
          },
        },
      ],
    },
  };
};

module.exports = config;
