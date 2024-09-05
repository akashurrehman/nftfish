const webpack = require('webpack');

module.exports = {
  // Other configurations...
  resolve: {
    fallback: {
      buffer: require.resolve('buffer/')
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
};
