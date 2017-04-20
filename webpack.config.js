const webpack = require('webpack');
const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
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
        loader: 'react-hot-loader/webpack',
        test: SRC_DIR,
      },
      {
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
        'NODE_ENV': JSON.stringify('development'),
      }
    }),
    new CopyWebpackPlugin([{ from: PUBLIC_DIR }]),
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin(),
    new DotenvPlugin({
      sample: './.env.example',
      path: './.env',
    }),
  ],
  watch: true,
  stats: { colors: true },
  devtool: 'eval',
  devServer: {
    host: 'localhost',
    port: 8080,
    historyApiFallback: true,
    contentBase: './',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },


}