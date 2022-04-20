const path = require('path');
const webpackAllHtmlFilesPlugin = require('./plugins/webpack.html-files');

module.exports = {
  entry: {
    main: path.join(__dirname, '/src/js/app.js'),
    vendor: path.join(__dirname, '/src/js/vendor.js'),
  },
  stats: 'errors-warnings',
  output: {
    assetModuleFilename: 'images/[hash][ext][query]',
    path: path.join(__dirname, '/dist'),
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: ['html-loader', 'posthtml-loader'],
      },
      {
        test: /\.(png|jpg|svg|gif|jpeg)/,
        type: 'asset/resource',
      },
      /* {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 10 * 1024,
        },
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader',
        options: {
          limit: 10 * 1024,
          noquotes: true,
        },
      }, */
    ],
  },
  plugins: [...webpackAllHtmlFilesPlugin('src')],
};
