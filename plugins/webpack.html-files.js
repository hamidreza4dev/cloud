const path = require('path');
const { readdirSync } = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
function allHtmlFiles(directory) {
  const files = readdirSync(path.resolve(__dirname, '..', directory)).filter(
    (file) => /\.html$/i.test(file)
  );
  return files.map((item) => {
    return new HtmlWebpackPlugin({
      template: `./${directory}/${item}`,
      filename: item,
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true,
      },
    });
  });
}

module.exports = allHtmlFiles;
