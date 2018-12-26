const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
};
