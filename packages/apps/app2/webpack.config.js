var path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
var APP_DIR = path.resolve(__dirname, ".");
module.exports = {
  entry: {
    app: './src/main.jsx',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Title',
    // Load a custom template (lodash by default)
      template: 'index.html',
    })
  ],
  devtool: "sourcemaps",
  cache: true,
  output: {
    filename: './public/[name].bundle.js',
    path: __dirname
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: process.env.NODE_ENV !== 'production',
            },

          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: process.env.NODE_ENV !== 'production',
            },
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".scss"]
  },
  devServer: {
    historyApiFallback: true
  },
  externals: {
    "di-utilities": "DI.Utilities",
    "di-components": "DI.Components"
  }
};