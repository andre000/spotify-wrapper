const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'spotfyWrapper',
  },
  target: 'node',
  module: {
    rules: [
      {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env',
              {
                targets: {
                  node: true,
                },
              },
            ],
          ],
        },
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
};
