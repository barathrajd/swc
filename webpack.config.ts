import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = (webpackEnv) => {
  const isDevelopment = webpackEnv.NODE_ENV !== 'production';

  return {
    mode: isDevelopment ? 'development' : 'production',
    entry: path.join(__dirname, 'src', 'main.tsx'),
    output: {
      path: path.join(__dirname, 'dist'),
      pathinfo: isDevelopment,
      chunkFilename: !isDevelopment
        ? 'static/js/[name].[contenthash:8].chunk.js'
        : isDevelopment && 'static/js/[name].chunk.js',
      filename: 'bundle.js',
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'src'),
      },
      port: 3000,
    },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: {
            loader: 'swc-loader',
            options: {
              sync: true,
            },
          },
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.join(__dirname, 'src/index.html'),
      }),
    ].filter(Boolean),
  };
};
