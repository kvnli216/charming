// webpack.config.js
module.exports = {
  // Existing configuration...

  module: {
    rules: [
      // Existing rules...

      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
};
