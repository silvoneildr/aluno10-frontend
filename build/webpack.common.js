const path = require('path');

module.exports = {
  entry: path.join(__dirname, '../src', 'index.js'),
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader',
        options: {
          limit: 10 * 1024,
          noquotes: true
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [],
  resolve: {
    alias: {
      Components: path.resolve(__dirname, '../src/components/'),
      Pages: path.resolve(__dirname, '../src/pages/'),
      Assets: path.resolve(__dirname, '../src/assets/'),
      Services: path.resolve(__dirname, '../src/services/'),
      Store: path.resolve(__dirname, '../src/store/'),
      Root: path.resolve(__dirname, '../src/')
    }
  }
};
