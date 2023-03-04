const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  resolve: {
    fallback: {
      fs: false,
      path: false,
      os: false
    }
  },
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new Dotenv()
  ]
};
