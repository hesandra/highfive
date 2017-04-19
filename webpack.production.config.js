const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
        'BASE_URL': JSON.stringify('http://localhost:8081'),
        'USERS_AUTH0_ID': JSON.stringify('IlzCSthZWHUlsCK873pORMn0QbgKyln3'),
        'COMPANIES_AUTH0_ID': JSON.stringify('7UaPvuy3YOxD71ls2EMR9R1iajCASSPI')
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new CopyWebpackPlugin([{ from: PUBLIC_DIR }]),
  ],
  stats: { colors: true },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
};
