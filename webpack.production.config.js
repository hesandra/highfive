const webpack = require('webpack');
const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const DotenvPlugin = require('webpack-dotenv-plugin');

const SRC_DIR = path.resolve(__dirname, 'client/src');
const PUBLIC_DIR = path.resolve(__dirname, 'client/public');
const BUILD_DIR = path.resolve(__dirname, 'client/build');

module.exports = {
  entry: {
    main: path.resolve(SRC_DIR, 'index.jsx'),
  },
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR

  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        test: SRC_DIR,
        query: {
          presets: ['es2015', 'react', 'stage-0'],
          plugins: ['transform-runtime', 'transform-decorators-legacy', 'transform-class-properties'],
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|png)$/,
        use: ['file-loader'],
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      }
    }),
    new webpack.EnvironmentPlugin({
      'BASE_URL': JSON.stringify('http:localhost')
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new CopyWebpackPlugin([{ from: PUBLIC_DIR }]),
    new DotenvPlugin({
      sample: './.env.example',
      path: './.env',
    }),
  ],
  stats: { colors: true },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
};
