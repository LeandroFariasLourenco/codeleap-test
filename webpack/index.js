require('dotenv').config();
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashPlugin = require('lodash-webpack-plugin');
const path = require('path');

module.exports = {
  entry: `${process.env.SRC}${process.env.PROJECT_NAME}-index.js`,
  plugins: [
    new HtmlWebpackPlugin({
      template: `./views/${process.env.PROJECT_NAME}-index.pug`,
      filename: `./views/${process.env.PROJECT_NAME}-index.html`,
    }),
    new LodashPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@components/*': './src/components/*',
      '@routes/*': path.resolve(__dirname, 'src', 'routes'),
      '@pages/*': './src/pages/*',
      '@Utils/*': './src/utils/*',
      '@Resources/*': './src/resources/*',
      '@Redux/*': './src/redux/*',
      '@Actions/*': './src/actions/*',
      '@Style/*': './src/style/*',
      '@Constants/*': './src/constants/*',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-transform-runtime'],
            },
          },
          {
            loader: 'eslint-loader',
          },
        ],
      },
      {
        test: /\.pug$/,
        use: {
          loader: 'pug-loader',
        },
      },
      {
        test: /\.(jpg|png|gif)$/i,
        use: {
          loader: 'url-loader',
        },
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css/i,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
};
