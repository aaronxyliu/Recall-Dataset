const config = require('./config/webpack/worker-es2019.js');
const { SourceMapDevToolPlugin } = require('webpack');
config.module.rules.push({
  test: /[\\/]build[\\/]es2019[\\/].*\.js$/,
  enforce: 'pre',
  use: [require.resolve('./recall-map-loader.cjs')],
});
module.exports = {
  ...config,
  plugins: [new SourceMapDevToolPlugin({ filename: '[file].map', test: /\.ts$/, append: false })],
  devtool: false,
  output: { ...config.output, path: require('node:path').resolve('map-check') },
};
