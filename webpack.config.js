const webpack = require('webpack');
const path = require('path');
const devMode = process.env.NODE_ENV !== 'production';
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: './src/main/index.js',
  }, // Dau vao
  output: { // Dau ra
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module:{
    rules:[
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
        	MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
	  new MiniCssExtractPlugin({
      filename: devMode ? '[name].bundle.css' : 'app.bundle.[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    })
	]
}
