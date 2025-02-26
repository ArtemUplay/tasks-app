import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import 'webpack-dev-server';
import { BuildEnv } from './src/types';

export default (env: BuildEnv): webpack.Configuration => {
  const mode = env.mode || 'development';

  return {
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    entry: {
      main: path.resolve(__dirname, './src/index.tsx'),
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        src: path.resolve(__dirname, 'src/'),
      },
    },
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'build'),
      clean: true,
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './src/index.html'),
      }),
    ],
    mode,
    devServer: {
      static: path.resolve(__dirname, 'build'),
      port: 3000,
      hot: true,
      open: true,
      historyApiFallback: true,
    },
  };
};
