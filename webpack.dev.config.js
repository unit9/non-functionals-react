const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/docs/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(gif|svg|jpg|png)$/,
        loader: 'file-loader',
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: './src/docs/index.html',
      filename: './index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        ENV: JSON.stringify(process.env.NODE_ENV),
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        BABEL_ENV: JSON.stringify(process.env.NODE_ENV),
        VERSION: JSON.stringify(`v ${process.env.BUILD_NUMBER || 'local'} built on ${new Date().toGMTString()}`),
      },
    }),
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 3000,
  }
};
