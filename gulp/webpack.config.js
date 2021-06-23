import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import { SourceMapDevToolPlugin, NoEmitOnErrorsPlugin } from 'webpack';
import { join } from 'path';
import paths from './modules/assets/paths';

const entry = {
  main: join(__dirname, '..', paths.srcPath, 'js', `main.js`),
  index: join(__dirname, '..', paths.srcPath, 'js', `index.js`)
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
        ? [new SourceMapDevToolPlugin(), new NoEmitOnErrorsPlugin()]
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

export default config;
